"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Film, CreditCard, User, LogOut, Tv, Tag, Star, Globe, Subtitles, Calendar, FileSpreadsheet, Eye, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"

const routes = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Netflix Accounts", path: "/dashboard/netflixAccount", icon: Users },
  { name: "Profiles", path: "/dashboard/profile", icon: User },
  { name: "Content", path: "/dashboard/content", icon: Film },
  { name: "Content Metadata", path: "/dashboard/contentMetadata", icon: Tag },
  { name: "Genres", path: "/dashboard/genre", icon: Tv },
  { name: "Content Ratings", path: "/dashboard/contentRating", icon: Star },
  { name: "Languages", path: "/dashboard/language", icon: Globe },
  { name: "Subtitles", path: "/dashboard/subtitle", icon: Subtitles },
  { name: "Subscriptions", path: "/dashboard/subscription", icon: CreditCard },
  { name: "Subscription Types", path: "/dashboard/subscriptionType", icon: Calendar },
  { name: "Invoices", path: "/dashboard/invoice", icon: FileSpreadsheet },
  { name: "Viewing History", path: "/dashboard/viewingHistory", icon: Eye },
  { name: "Watchlist", path: "/dashboard/watchlist", icon: Bookmark },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 md:w-72 lg:w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col relative z-20">
      <div className="px-6 py-6 border-b border-zinc-800">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-red-600 text-2xl font-bold">NETFLIX</span>
          <span className="text-gray-100 text-sm font-medium">Dashboard</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                pathname === route.path 
                  ? 'bg-red-600/10 text-red-500' 
                  : 'text-gray-400 hover:bg-zinc-800 hover:text-gray-100'
              }`}
            >
              <route.icon className="h-4 w-4" />
              <span>{route.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="px-6 py-4 border-t border-zinc-800">
        <Button 
          variant="ghost" 
          className="w-full justify-start py-2 text-gray-400 hover:bg-zinc-800 hover:text-gray-100" 
          asChild
        >
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </Link>
        </Button>
      </div>
    </aside>
  )
}

