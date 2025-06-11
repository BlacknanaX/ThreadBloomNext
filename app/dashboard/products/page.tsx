import {Metadata} from 'next';
import {productColumns, Products} from "@/components/dashboard/columns";
import {ProductTable} from "@/components/dashboard/data-table";
import {getData, fetchProductsPages} from "@/lib/api/products";


export const metadata: Metadata = {
    title: 'Products',
}

// export let pageinationState:PaginationState;

export default async function Page(props:{
    searchParams?: Promise<{
        query?:string;
        page?:number;
    }>;
}) {
    const data:Products[] = await getData();
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage:number = Number(searchParams?.page) || 1;
    const totalPages:number = await fetchProductsPages(query);
    return (
        <div className="w-full">
            <div className="flex w-full item-center justify-between">
                <h1 className="text-3xl md:text-4xl">Products</h1>
            </div>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <ProductTable data={data} columns={productColumns} />
                </div>
            </div>
        </div>
    )
}
// export default async function Page(){
//     return (
//         <div className="w-full">
//             <div className="flex w-full item-center justify-between">
//                 <h1 className="text-3xl md:text-4xl">Products</h1>
//             </div>
//             <div className="mt-4 flex item-center justify-between gap-2 md:mt-8">
//                 <Search placeholder="Search produts..."/>
//                 <CreateProduct/>
//             </div>
//             <ProductTable/>
//             <div className="mt-5 flex w-full justify-center">
//                 <TablePagination/>
//             </div>
//         </div>
//     );
// }

// export default async function Page(
// //     props: {
// //     searchParams?: Promise<{
// //         query?: string;
// //         page?: string;
// //     }>;
// // }
// ) {
// // const searchParams = await props.searchParams;
// // const query = searchParams?.query || '';
// // const currentPage = Number(searchParams?.page) || 1;
// // const totalPages = await fetchInvoicesPages(query);
//
//     return (
//         <div className="w-full">
//             <div className="flex w-full item-center justify-between">
//                 <h1 className="text-3xl md:text-4xl">Products</h1>
//             </div>
//             <div className="mt-4 flex item-center justify-between gap-2 md:mt-8">
//                 <Search placeholder="Search produts..."/>
//                 <CreateProduct/>
//             </div>
//             <ProductTable/>
//             {/*<Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>*/}
//             {/*    <Table query={query} currentPage={currentPage}/>*/}
//             {/*</Suspense>*/}
//             <div className="mt-5 flex w-full justify-center">
//                 <TablePagination/>
//             </div>
//         </div>
//     );
// }