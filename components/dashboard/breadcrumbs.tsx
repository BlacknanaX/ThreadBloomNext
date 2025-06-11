'use client';
import {Slash} from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {clsx} from "clsx";

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

export function Breadcrumbs({
                                breadcrumbs,
                            }: {
    breadcrumbs: Breadcrumb[]
}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map(breadcrumb=>{
                    return(
                        <>
                            <BreadcrumbItem className="text-2xl font-medium">
                                <BreadcrumbLink href={breadcrumb.active?breadcrumb.href: "/#"} className={clsx(
                                    breadcrumb.active ? "text-gray-900" : "text-primary",
                                )}>{breadcrumb.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash/>
                            </BreadcrumbSeparator>
                        </>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
