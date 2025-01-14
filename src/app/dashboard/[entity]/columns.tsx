"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mockSchema } from "@/lib/mockData"

const ActionColumn: ColumnDef<any, any> = {
  id: "actions",
  cell: ({ row }) => {
    const item = row.original
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
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.id)}>
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const columns: Record<string, ColumnDef<any, any>[]> = Object.keys(mockSchema).reduce((acc, entity) => {
  acc[entity] = [
    ...mockSchema[entity].map(field => ({
      accessorKey: field.name,
      header: field.name,
      cell: (info: { getValue: () => any }) => {
        const value = info.getValue()
        if (value instanceof Date) {
          return value.toLocaleString()
        }
        if (typeof value === 'boolean') {
          return value ? 'Yes' : 'No'
        }
        return value
      }
    })),
    ActionColumn
  ]
  return acc
}, {} as Record<string, ColumnDef<any, any>[]>)

