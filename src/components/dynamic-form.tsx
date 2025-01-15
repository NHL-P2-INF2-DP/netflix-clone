"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { getEnumValues } from '@/lib/prisma-schema-parser'

interface Field {
  name: string
  type: string
  required: boolean
  isId?: boolean
  isUnique?: boolean
  default?: unknown
}

interface DynamicFormProps {
  fields: Field[]
  onSubmit: (data: Record<string, unknown>) => void
}

export function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>({})
  const [enumValues, setEnumValues] = useState<Record<string, string[]>>({})

  useEffect(() => {
    const initialData = fields.reduce((acc, field) => {
      if (field.type === 'Boolean') {
        acc[field.name] = false
      } else if (field.type === 'DateTime') {
        acc[field.name] = new Date().toISOString()
      } else {
        acc[field.name] = ''
      }
      return acc
    }, {} as Record<string, unknown>)
    setFormData(initialData)

    // Fetch enum values for enum fields
    fields.forEach(async (field) => {
      if (field.type.startsWith('Enum')) {
        const values = await getEnumValues(field.type.replace('Enum', ''))
        setEnumValues(prev => ({ ...prev, [field.name]: values }))
      }
    })
  }, [fields])

  const handleChange = (name: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return isNaN(date.getTime()) ? '' : format(date, "MM/dd/yyyy")
  }

  const renderField = (field: Field) => {
    if (field.name === 'id' || field.isId) {
      return null // Exclude the 'id' field from the form
    }

    switch (field.type) {
      case 'String':
      case 'Int':
      case 'Float':
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type === 'String' ? 'text' : 'number'}
            value={formData[field.name] as string | number | undefined}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
          />
        )
      case 'Boolean':
        return (
          <Checkbox
            id={field.name}
            name={field.name}
            checked={formData[field.name] as boolean | undefined}
            onCheckedChange={(checked) => handleChange(field.name, checked)}
          />
        )
      case 'DateTime':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !formData[field.name] && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData[field.name] ? formatDate(formData[field.name] as string) : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData[field.name] ? new Date(formData[field.name] as string) : undefined}
                onSelect={(date) => handleChange(field.name, date?.toISOString())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )
      default:
        if (field.type.startsWith('Enum') && enumValues[field.name]) {
          return (
            <Select 
              value={formData[field.name] as string}
              onValueChange={(value) => handleChange(field.name, value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${field.name}`} />
              </SelectTrigger>
              <SelectContent>
                {enumValues[field.name].map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        }
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-0">
      {fields.filter(field => !field.isId).map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.name}</Label>
          {renderField(field)}
        </div>
      ))}
      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Submit</Button>
    </form>
  )
}

