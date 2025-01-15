import { Metadata } from "next"
import { notFound } from "next/navigation"
import { capitalize } from "@/lib/utils"
import { prisma } from "@/lib/prisma"
import { EntityDataTable } from "./entity-data-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PageProps = {
  params: { entity: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${capitalize(params.entity)} Management`,
    description: `Manage Netflix ${params.entity}`,
  }
}

export default async function EntityPage({ params }: PageProps) {
  const { entity } = params

  let data: Record<string, unknown>[] = []
  try {
    data = await prisma[entity].findMany()
  } catch (error) {
    console.error(`Error fetching ${entity}:`, error)
    notFound()
  }

  if (!data || data.length === 0) {
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
          <EntityDataTable entity={entity} initialData={data} />
        </CardContent>
      </Card>
    </div>
  )
}

