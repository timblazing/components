"use client"

// From the bklit package: import { AreaChart, Area, Grid, XAxis, ChartTooltip } from "@bklitui/ui/charts"
import { AreaChart, Area, Grid, XAxis, ChartTooltip } from "@/components/charts"

import { curveNatural } from "@visx/curve";

const chartData = [
  { date: new Date("2024-01-01"), desktop: 186 },
  { date: new Date("2024-02-01"), desktop: 305 },
  { date: new Date("2024-03-01"), desktop: 237 },
  { date: new Date("2024-04-01"), desktop: 73 },
  { date: new Date("2024-05-01"), desktop: 209 },
  { date: new Date("2024-06-01"), desktop: 214 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <AreaChart data={chartData} animationDuration={1100}>
  <Grid horizontal />
  <Area dataKey="desktop" curve={curveNatural} strokeWidth={2.5} fillOpacity={0.4} />
  <XAxis />
  <ChartTooltip />
</AreaChart>
      </div>
    </div>
  )
}
