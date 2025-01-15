"use client"

import { Bell, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="w-full bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-4 relative z-10">
      <div className="flex justify-end gap-4">
        <Button variant="ghost" size="sm" className="relative text-gray-300 hover:text-gray-100 hover:bg-zinc-800">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2 text-gray-300 hover:text-gray-100 hover:bg-zinc-800">
              <User className="h-5 w-5" />
              <span>John Doe</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-zinc-800 border border-zinc-700 mt-1">
            <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <DropdownMenuItem className="text-gray-300 focus:bg-zinc-700 focus:text-gray-100">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 focus:bg-zinc-700 focus:text-gray-100">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 focus:bg-zinc-700 focus:text-gray-100">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

