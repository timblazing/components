"use client"

// From the bklit package: import { LineChart, Line, Grid, XAxis, ChartTooltip } from "@bklitui/ui/charts"
import { LineChart, Line, Grid, XAxis, ChartTooltip } from "@/components/charts"

import { curveNatural } from "@visx/curve";

const chartData = [
  { date: new Date("2024-01-01"), users: 1200 },
  { date: new Date("2024-02-01"), users: 1350 },
  { date: new Date("2024-03-01"), users: 1100 },
  { date: new Date("2024-04-01"), users: 1450 },
  { date: new Date("2024-05-01"), users: 1380 },
  { date: new Date("2024-06-01"), users: 1520 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <LineChart data={chartData}>
  <Grid horizontal />
  <Line dataKey="users" curve={curveNatural} stroke="var(--chart-line-primary)" />
  <XAxis />
  <ChartTooltip />
</LineChart>
      </div>
    </div>
  )
}
