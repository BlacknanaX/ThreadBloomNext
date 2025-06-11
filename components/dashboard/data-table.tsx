"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel, getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import * as React from "react";
import {DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import {ChevronDown, Plus, Search} from "lucide-react";
import {Products} from "@/components/dashboard/columns";
import {Input} from "@/components/ui/input";
import {CreateProduct} from "@/components/dashboard/button";


export function ProductTable(props:{data:Products[], columns:ColumnDef<Products>[]}){
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const {data, columns} = props;

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4 gap-4">
                <div className="relative flex flex-shrink-0">
                    <Input
                        placeholder="Filter product..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm min-w-sm placeholder:text-xl text-xl py-[9px] pl-10 flex-1 h-12"
                    />
                    <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                </div>
                <CreateProduct/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto text-xl">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="text-lg border">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
// interface DataTableProps<TData, TValue, PaginationState> {
//     columns: ColumnDef<TData, TValue>[]
//     data: TData[]
//     pageState: PaginationState
// }
//
// export function DataTable<TData, TValue>({
//                                              columns,
//                                              data,
//                                              pageState,
//                                          }: DataTableProps<TData, TValue, PaginationState>) {
//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//     })
//
//     return (
//         <div>
//             <div className="rounded-md border">
//                 <Table>
//                     <TableHeader>
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => {
//                                     return (
//                                         <TableHead key={header.id}>
//                                             {header.isPlaceholder
//                                                 ? null
//                                                 : flexRender(
//                                                     header.column.columnDef.header,
//                                                     header.getContext()
//                                                 )}
//                                         </TableHead>
//                                     )
//                                 })}
//                             </TableRow>
//                         ))}
//                     </TableHeader>
//                     <TableBody>
//                         {table.getRowModel().rows?.length ? (
//                             table.getRowModel().rows.map((row) => (
//                                 <TableRow
//                                     key={row.id}
//                                     data-state={row.getIsSelected() && "selected"}
//                                 >
//                                     {row.getVisibleCells().map((cell) => (
//                                         <TableCell key={cell.id}>
//                                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                         </TableCell>
//                                     ))}
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                                     No results.
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//             <DataTablePagination table={table} />
//             {/*<div className="flex items-center justify-end space-x-2 py-4">*/}
//             {/*    <Button*/}
//             {/*        variant="outline"*/}
//             {/*        size="sm"*/}
//             {/*        onClick={() => table.previousPage()}*/}
//             {/*        disabled={!table.getCanPreviousPage()}*/}
//             {/*    >*/}
//             {/*        Previous*/}
//             {/*    </Button>*/}
//             {/*    /!*{*!/*/}
//             {/*    /!*    Array.from({length:5}, (value,index)=>index).map((value)=>*!/*/}
//             {/*    /!*        <Button className="hover:bg-secondary"*!/*/}
//             {/*    /!*                variant="ghost"*!/*/}
//             {/*    /!*                size="sm"*!/*/}
//             {/*    /!*                onClick={() => table.firstPage()}*!/*/}
//             {/*    /!*        >1</Button>*!/*/}
//             {/*    /!*    )*!/*/}
//             {/*    /!*}*!/*/}
//             {/*    <Button className="hover:bg-secondary"*/}
//             {/*        variant="ghost"*/}
//             {/*        size="sm"*/}
//             {/*        onClick={() => table.firstPage()}*/}
//             {/*    >1</Button>*/}
//             {/*    <Button*/}
//             {/*        variant="outline"*/}
//             {/*        size="sm"*/}
//             {/*        onClick={() => table.nextPage()}*/}
//             {/*        disabled={!table.getCanNextPage()}*/}
//
//             {/*    >*/}
//             {/*        Next*/}
//             {/*    </Button>*/}
//             {/*</div>*/}
//         </div>
//     )
// }
