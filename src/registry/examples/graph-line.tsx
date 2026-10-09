"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { week: "W1", visitors: 1240 },
  { week: "W2", visitors: 1480 },
  { week: "W3", visitors: 1390 },
  { week: "W4", visitors: 1810 },
  { week: "W5", visitors: 2050 },
  { week: "W6", visitors: 1960 },
]

const config = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
} satisfies ChartConfig

export default function ChartLine() {
  return (
    <ChartContainer config={config} className="aspect-auto h-[250px] w-full max-w-lg">
      <LineChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Line dataKey="visitors" type="monotone" stroke="var(--color-visitors)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
