import { Metadata } from "next"
import { notFound } from "next/navigation"
import { capitalize } from "@/lib/utils"
import { mockData } from "@/lib/mockData"
import { EntityDataTable } from "./entity-data-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata({ params }: { params: { entity: string } }): Promise<Metadata> {
  return {
    title: `${capitalize(params.entity)} Management`,
    description: `Manage Netflix ${params.entity}`,
  }
}

export default function EntityPage({ params }: { params: { entity: string } }) {
  const { entity } = params
  const data = mockData[entity as keyof typeof mockData]

  if (!data) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">{capitalize(entity)} Management</h1>
      </div>
      <Card className="overflow-hidden">
        <CardHeader className="bg-gray-50 dark:bg-gray-800/50 px-8 py-6">
          <CardTitle className="text-xl">{capitalize(entity)} List</CardTitle>
        </CardHeader>
        <CardContent className="p-0"> 
          <EntityDataTable entity={entity} />
        </CardContent>
      </Card>
    </div>
  )
}

