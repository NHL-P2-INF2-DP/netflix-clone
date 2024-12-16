import { DataTable } from "../../../components/data-table"
import { columns } from "./columns"
import { SidebarTrigger } from "../../../components/ui/sidebar"

const data = [
  {
    id: "728ed52f",
    name: "John Doe",
    email: "john@example.com",
    subscriptionType: "Premium",
    status: "Active",
  },
  {
    id: "489e1d42",
    name: "Jane Smith",
    email: "jane@example.com",
    subscriptionType: "Standard",
    status: "Active",
  },
  // Add more mock data as needed
]

export default function UsersPage() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
        <SidebarTrigger />
      </div>
      <div className="mb-4">
        <p className="text-muted-foreground">Manage and view all Netflix users.</p>
      </div>
      <DataTable columns={columns} data={data} searchable />
    </div>
  )
}

