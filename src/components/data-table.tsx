"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { DataTableSearch } from "../components/data-table-search"
import { cn } from "../lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchable?: boolean
  className?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchable = false,
  className,
}: DataTableProps<TData, TValue>) {
  const [searchValue, setSearchValue] = useState("")

  const filteredData = data.filter((item) =>
    Object.values(item as Record<string, unknown>).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(searchValue.toLowerCase())
    )
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={cn("w-full h-full rounded-md border", className)}>
      {searchable && (
        <div className="mb-4">
          <DataTableSearch onSearch={setSearchValue} />
        </div>
      )}
      <Table className="w-full h-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="h-full overflow-auto">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

