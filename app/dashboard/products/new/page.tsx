// import Form from '@/app/ui/invoices/create-form';
// import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
// import {fetchCustomers} from "@/app/lib/data";
import {Breadcrumbs} from "@/components/dashboard//breadcrumbs";

export default async function Page() {
    // const customers = await fetchCustomers();
    const breadcrumbs = [
        {label: 'Products', href: '/dashboard/products'},
        {label: 'Create Product', href: '/dashboard/products/new', active: true},
    ];

    return (
        <main>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            {/*<Form customers={customers}/>*/}
        </main>
    );
}