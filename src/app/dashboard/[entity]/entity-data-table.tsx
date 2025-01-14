"use client"

import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { useState, useCallback, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import { DynamicForm } from "@/components/dynamic-form"
import { Modal } from "@/components/ui/modal"
import { getFieldsFromMockSchema, mockData } from "@/lib/mockData"

interface EntityDataTableProps {
  entity: string
}

export function EntityDataTable({ entity }: EntityDataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [filteredData, setFilteredData] = useState<any[]>([])
  
  useEffect(() => {
    setData(mockData[entity as keyof typeof mockData] || [])
  }, [entity])

  useEffect(() => {
    setFilteredData(
      data.filter(item =>
        Object.values(item).some(
          val => 
            val && 
            val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    )
  }, [data, searchTerm])

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value)
  }, [])

  const handleAdd = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', formData)
    setIsModalOpen(false)
    setData(prevData => [...prevData, formData])
  }

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  const entityColumns = columns[entity as keyof typeof columns]

  return (
    <div className="flex flex-col min-h-[400px]">
      <div className="flex items-center justify-between gap-6 p-4">
        <div className="w-full max-w-md">
          <Input
            placeholder={`Search ${entity}...`}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
          />
        </div>
        <Button onClick={handleAdd} className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add {capitalize(entity)}
        </Button>
      </div>
      <div className="flex-1 overflow-hidden border rounded-md border-gray-200 dark:border-gray-700">
        <DataTable columns={entityColumns} data={filteredData} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Add ${capitalize(entity)}`}>
        <DynamicForm 
          fields={getFieldsFromMockSchema(entity)}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  )
}

