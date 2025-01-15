"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface DataTableSearchProps {
  onSearch: (value: string) => void
}

export function DataTableSearch({ onSearch }: DataTableSearchProps) {
  const [value, setValue] = useState("")

  const handleSearch = (searchValue: string) => {
    setValue(searchValue)
    onSearch(searchValue)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-8 max-w-sm"
      />
    </div>
  )
}

