"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'

export type Content = {
  id: string
  title: string
  type: string
  languages: string[]
  genres: string[]
  contentRating: string
}

export const columns: ColumnDef<Content>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "languages",
    header: "Languages",
    cell: ({ row }) => {
      const languages = row.getValue("languages") as string[]
      return (
        <div className="flex flex-wrap gap-1">
          {languages.map((lang) => (
            <Badge key={lang} variant="outline">
              {lang}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "genres",
    header: "Genres",
    cell: ({ row }) => {
      const genres = row.getValue("genres") as string[]
      return genres.join(", ")
    },
  },
  {
    accessorKey: "contentRating",
    header: "Rating",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const content = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(content.id)}>
              Copy content ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View content details</DropdownMenuItem>
            <DropdownMenuItem>Edit content</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

