import { Column } from "@tanstack/react-table"
import {
    // ArrowDown,
    // ArrowUp,
    ArrowUpDown,
    // ChevronsUpDown,
    // EyeOff
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
                                                         column,
                                                         title,
                                                         className,
                                                     }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("flex items-center space-x-2", className)}>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`-ml-3 ${className} data-[state=open]:bg-secondary hover:bg-secondary`}
                    >
                        <span>{title}</span>
                        <ArrowUpDown size={24}/>
                        {/*{column.getIsSorted() === "desc" ? (*/}
                        {/*    <ArrowDown />*/}
                        {/*) : column.getIsSorted() === "asc" ? (*/}
                        {/*    <ArrowUp />*/}
                        {/*) : (*/}
                        {/*    <ChevronsUpDown />*/}
                        {/*)}*/}
                    </Button>
        </div>
    )
}
