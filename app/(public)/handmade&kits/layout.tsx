// import {usePathname} from "next/navigation";
import {PublicBreadcrumbs} from "@/components/public/breadcrumbs";
import React from "react";

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <main>
            <div className="container mx-auto p-4 py-8">
                <PublicBreadcrumbs/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </main>
    );
}