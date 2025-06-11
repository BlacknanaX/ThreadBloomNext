"use client"

import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DeleteProduct, UpdateProduct} from "@/components/dashboard/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category_id: string;
    stock: number;
}

export const productColumns: ColumnDef<Products>[] = [
    {
        accessorKey: "name",
        header: () => <div className="text-primary py-4 text-left text-2xl font-normal sm:pl-6">Product</div>,
        cell: ({row}) => (
            <div className="px-4 py-3 rounded-lg text-left text-xl font-medium sm:pl-6">{row.getValue("name")}</div>
        )

    },
    {
        accessorKey: "category",
        header:
            ({column}) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-10 text-primary text-left text-2xl font-normal sm:pl-6 hover:bg-accent/50"
                >
                    Category
                    <ArrowUpDown/>
                </Button>
            ),
        cell:
            ({row}) => (
                <div
                    className="px-4 py-3 rounded-lg text-left text-xl font-medium sm:pl-6">{row.getValue("category")}</div>
            )
    }
    ,
    {
        accessorKey: "price",
        header:
            ({column}) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-10 text-primary text-left text-2xl font-normal sm:pl-6 hover:bg-accent/50"
                >
                    Price
                    <ArrowUpDown/>
                </Button>
            ),
        cell:
            ({row}) => {
                const price = parseFloat(row.getValue("price"));
                // const formatted = new Intl.NumberFormat("en-GB",
                    //     {
                    //     style: "currency",
                    //     currency: "GB",
                    // }
                // ).format(price)
                const formatted = price.toFixed(2);

                return <div className="px-4 py-3 rounded-lg text-left text-xl font-medium sm:pl-6">£{formatted}</div>
            },
    }
    ,
    {
        accessorKey: "stock",
        header:
            ({column}) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-10 text-primary text-left text-2xl font-normal sm:pl-6 hover:bg-accent/50"
                >
                    Stock
                    <ArrowUpDown/>
                </Button>
            ),
        cell:
            ({row}) => {
                const lowStock = row.getValue("stock")===1;
                const outOfStock = row.getValue("stock")===0;
                return (
                    <div
                        className="px-4 py-3 rounded-lg text-left text-xl font-medium sm:pl-6">{row.getValue("stock")}
                        {lowStock?(<span className="text-yellow-600"> Low Stock</span>):""}
                        {outOfStock?(<span className="text-red-600"> Out of Stock</span>): ""}
                    </div>
                )
            }
    }
    ,
    {
        id: "actions",
        enableHiding:
            false,
        header:
            () => <div className="text-primary py-4 text-center text-2xl font-normal sm:pl-6">Actions</div>,
        cell:
            ({row}) => (
                <div className="flex gap-2 justify-center">
                    <UpdateProduct id={row.id}/>
                    <DeleteProduct id={row.id}/>
                </div>
            )

    }
    ,
]