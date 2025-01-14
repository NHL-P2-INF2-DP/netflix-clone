import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Users, Film, CreditCard, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Netflix employee dashboard",
}

export default function DashboardPage() {

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-100">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button className="bg-red-600 hover:bg-red-700 text-white">Download</Button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">1,234,567</div>
            <p className="text-xs text-gray-400">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Content</CardTitle>
            <Film className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">15,832</div>
            <p className="text-xs text-gray-400">+120 new titles this month</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">$5,231,890</div>
            <p className="text-xs text-gray-400">+18.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Active Streams</CardTitle>
            <Eye className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-100">573,281</div>
            <p className="text-xs text-gray-400">+201,234 from last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 mt-8 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3 bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Sales</CardTitle>
            <CardDescription className="text-gray-400">
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

