"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "May", desktop: 186, mobile: 80 },
  { month: "Jun", desktop: 305, mobile: 200 },
  { month: "Jul", desktop: 237, mobile: 120 },
  { month: "Aug", desktop: 273, mobile: 190 },
  { month: "Sep", desktop: 209, mobile: 130 },
  { month: "Oct", desktop: 314, mobile: 140 },
]

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <ChartContainer config={config} className="aspect-auto h-[250px] w-full max-w-lg">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
