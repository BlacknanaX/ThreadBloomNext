import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/dashboard/sidebar"
// import "@/styles/dashboard.css";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/*<div className="w-full flex-none md:w-64">*/}
                <SidebarProvider>
                    <AppSidebar/>
                    <main className="flex-grow p-6 md:overflow-y-auto">
                        <SidebarTrigger/>
                        {/*{children}*/}
                        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                    </main>
                </SidebarProvider>
        </div>
    )
}