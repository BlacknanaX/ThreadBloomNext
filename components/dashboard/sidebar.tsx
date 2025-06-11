'use client';

import {
    Calendar,
    ChevronDown,
    ChevronUp,
    Home,
    Inbox,
    Settings,
    User2,
    AppWindow,
    BadgePoundSterling,
    ShoppingBasket
} from "lucide-react"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {clsx} from "clsx";
import {usePathname} from "next/navigation";

// Menu items.
const navList = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
        sub:[]
    },
    // {
    //     title: "Inbox",
    //     url: "#",
    //     icon: Inbox,
    //     subs:[],
    // },
    {
        title: "Products",
        url: "/dashboard/products",
        icon: ShoppingBasket,
        subs:[]
    },
    {
        title: "Invoices",
        url: "/dashboard/invoices",
        icon: BadgePoundSterling,
        subs:[]
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
        subs:[{
            title:"Menu",
            url:"#",
            icon: AppWindow
        }]
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SideNav/>
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <SideFooter/>
        </Sidebar>
    )
}

function SideNav() {
    const pathname = usePathname();
    return (
        <SidebarContent className="flex h-full flex-col px-3 py-4 md:px-2">
            <SidebarGroup>
                <SidebarGroupLabel className="text-3xl font-bold text-white mb-2 flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40">
                    ThreadBloom
                </SidebarGroupLabel>
                <SidebarGroupContent className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    <SidebarMenu>
                        {navList.map((item) => {
                            if (item.subs && item.subs.length>0) {
                                return (
                                    <Collapsible defaultOpen className="group/collapsible">
                                        <SidebarMenuItem key={item.title}>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton asChild>
                                                    <Link href={item.url}
                                                          className="'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'"
                                                    >
                                                        <item.icon className="w-6"/>
                                                        <span className="text-xl">{item.title}</span>
                                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                    </Link>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.subs.map((sub)=>(
                                                        <SidebarMenuSubItem key={sub.title}>
                                                            <SidebarMenuSubButton asChild>
                                                                <Link href={sub.url}
                                                                      className={clsx(
                                                                          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                                                          {
                                                                              'bg-sky-100 text-blue-600': pathname === item.url
                                                                          }
                                                                      )}
                                                                >
                                                                    <sub.icon className="w-6"/>
                                                                    <span className="text-xl hidden md:block">{sub.title}</span>
                                                                </Link>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>

                                );
                            }
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}
                                              className={clsx(
                                                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                              {
                                                  'bg-sky-100 text-blue-600': pathname === item.url
                                              }
                                                  )}
                                        >
                                            <item.icon className="w-6"/>
                                            <span className="text-xl">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    );
}

function SideFooter(){
    return (
        <SidebarFooter className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton className="text-xl">
                                <User2 className="w-6"/> Username
                                <ChevronUp className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="w-[--radix-popper-anchor-width]"
                        >
                            <DropdownMenuItem>
                                <span className="text-lg">Account</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="text-lg">Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>

    );
}
