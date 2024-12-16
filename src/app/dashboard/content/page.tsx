import { DataTable } from "../../../components/data-table"
import { columns } from "./columns"
import { SidebarTrigger } from "../../../components/ui/sidebar"

const data = [
  {
    id: "1",
    title: "Stranger Things",
    type: "TV Series",
    languages: ["English", "Spanish", "French"],
    genres: ["Sci-Fi", "Horror"],
    contentRating: "TV-14",
  },
  {
    id: "2",
    title: "The Crown",
    type: "TV Series",
    languages: ["English", "German", "Italian"],
    genres: ["Drama", "History"],
    contentRating: "TV-MA",
  },
]

export default function ContentPage() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content</h1>
        <SidebarTrigger />
      </div>
      <div>
        <p className="text-muted-foreground">Manage and view all Netflix content.</p>
      </div>
        <DataTable columns={columns} data={data} searchable />
    </div>
  )
}

