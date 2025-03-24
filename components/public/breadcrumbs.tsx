'use client';

import {Breadcrumbs} from "@/components/breadcrumb";
import {usePathname} from "next/navigation";
import React from "react";
import {NavList} from "@/lib/data";

export function PublicBreadcrumbs() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);
    let currentPath = "";
    const breadcrumbs = paths.map((path, index)=>{
        currentPath += `/${path}`;
        const isLast = index === paths.length - 1;
        const pathInfo = NavList.find(
            navItem => navItem.name.toLowerCase().replace(/\s+/g, "") === path
        );
        console.log(pathInfo);
        return {
            label: path.toUpperCase(),
            href: isLast ? "#" : currentPath,
            id: pathInfo ? "" : pathInfo.id,
        }
    });

    return (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
    );
}