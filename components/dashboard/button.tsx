// import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {PlusIcon, PencilIcon, TrashIcon} from "lucide-react";
import Link from 'next/link';
import {Button} from "@/components/ui/button";
// import {deleteInvoice} from "@/app/lib/actions";

export function CreateProduct() {
    return (
        <Link
            href="/dashboard/products/new"
            className="flex h-12 items-center rounded-lg bg-blue-600 px-4 text-xl text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <PlusIcon className="h-5"/>
            <span className="hidden md:block text-xl">Add Product</span>{' '}
        </Link>
    );
}

export function UpdateProduct({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/products/${id}/edit`}
            className="rounded-md p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteProduct({ id }: { id: string }) {
    // const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    return (
        // <form action={deleteInvoiceWithId}>
        <form>
            <button type="submit" className="rounded-md p-2 hover:bg-gray-100 cursor-pointer">
                <span className="sr-only ">Delete</span>
                <TrashIcon className="w-5 text-red-500" />
            </button>
        </form>
    );
}
