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

export const columns: ColumnDef<{ id: string; userId: string; amount: number; status: string; date: string; }>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "Paid"
              ? "default"
              : status === "Pending"
              ? "secondary"
              : "destructive"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invoice = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(invoice.id)}>
              Copy invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View invoice details</DropdownMenuItem>
            <DropdownMenuItem>Download invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
