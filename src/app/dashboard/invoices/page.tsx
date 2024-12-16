import { DataTable } from "../../../components/data-table"
import { columns } from "./columns"
import { SidebarTrigger } from "../../../components/ui/sidebar"

const data = [
  {
    id: "INV001",
    userId: "728ed52f",
    amount: 19.99,
    status: "Paid",
    date: "2023-01-01",
  },
  {
    id: "INV002",
    userId: "489e1d42",
    amount: 15.99,
    status: "Pending",
    date: "2023-01-05",
  },
]

export default function InvoicesPage() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <SidebarTrigger />
      </div>
      <div className="mb-4">
        <p className="text-muted-foreground">View and manage all invoices.</p>
      </div>
      <DataTable columns={columns} data={data} searchable />
    </div>
  )
}

