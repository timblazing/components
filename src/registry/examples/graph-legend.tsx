"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "Jul", new: 120, returning: 340 },
  { month: "Aug", new: 190, returning: 310 },
  { month: "Sep", new: 130, returning: 360 },
  { month: "Oct", new: 240, returning: 390 },
]

const config = {
  new: { label: "New", color: "var(--chart-1)" },
  returning: { label: "Returning", color: "var(--chart-3)" },
} satisfies ChartConfig

export default function ChartLegendExample() {
  return (
    <ChartContainer config={config} className="aspect-auto h-[250px] w-full max-w-lg">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="new" stackId="a" fill="var(--color-new)" />
        <Bar dataKey="returning" stackId="a" fill="var(--color-returning)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
