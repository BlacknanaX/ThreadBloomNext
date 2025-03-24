'use client';
import {Slash} from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Breadcrumb {
    label: string;
    href: string;
    id: string;
}

export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: Breadcrumb[]
}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map(breadcrumb=>{
                    return(
                        <>
                            <BreadcrumbSeparator>
                                <Slash/>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink id={breadcrumb.id} href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
