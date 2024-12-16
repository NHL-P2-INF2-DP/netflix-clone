"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Feb", total: 3000 },
  { name: "Mar", total: 4500 },
  { name: "Apr", total: 2000 },
  { name: "May", total: 3500 },
  { name: "Jun", total: 2800 },
  { name: "Jul", total: 3800 },
  { name: "Aug", total: 2500 },
  { name: "Sep", total: 3200 },
  { name: "Oct", total: 3000 },
  { name: "Nov", total: 4000 },
  { name: "Dec", total: 3800 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
          tickCount={6}
        />
        <Bar 
          dataKey="total" 
          fill="#adfa1d" 
          radius={[4, 4, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

