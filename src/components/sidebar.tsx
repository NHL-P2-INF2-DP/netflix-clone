"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Film, FileText, LogOut } from 'lucide-react'
import { Button } from "../components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../components/ui/sidebar"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Content", href: "/dashboard/content", icon: Film },
  { name: "Invoices", href: "/dashboard/invoices", icon: FileText },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="w-[260px] min-w-[64px]">
      <SidebarHeader>
      <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <span className="text-red-600">NETFLIX</span> Employee Dashboard
          </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

