import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Products} from "@/lib/placehold-data";
import {DeleteProduct, UpdateProduct} from "@/components/dashboard/button";

export function ProductTable() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <Table className="hidden min-w-full text-gray-900 md:table">
                    <TableCaption>A list of products.</TableCaption>
                    <TableHeader>
                        <TableRow className="rounded-lg text-left text-2xl font-normal">
                            <TableHead className="py-5 font-medium sm:pl-6">Products</TableHead>
                            <TableHead className="py-5 font-medium sm:pl-6">Category</TableHead>
                            <TableHead className="py-5 font-medium sm:pl-6">Price</TableHead>
                            <TableHead className="py-5 font-medium sm:pl-6">Stock</TableHead>
                            <TableHead className="py-5 font-medium sm:pl-6 text-center">Operations</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Products?.map((product) => (
                            <TableRow key={product.id} className="rounded-lg text-left text-xl font-medium">
                                <TableCell className="py-5 font-medium sm:pl-6">{product.name}</TableCell>
                                <TableCell className="px-4 py-5 font-medium sm:pl-6">{product.category_id}</TableCell>
                                <TableCell className="px-4 py-5 font-medium sm:pl-6">{product.price}</TableCell>
                                <TableCell className="px-4 py-5 font-medium sm:pl-6">10</TableCell>
                                <TableCell className="flex gap-2 justify-center">
                                    <UpdateProduct id={product.id}/>
                                    <DeleteProduct id={product.id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}