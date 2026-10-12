"use client"

// From the bklit package: import { CandlestickChart, Candlestick, Grid, XAxis, YAxis, ChartTooltip } from "@bklitui/ui/charts"
import { CandlestickChart, Candlestick, Grid, XAxis, YAxis, ChartTooltip } from "@/components/charts"

const ohlcData = [
  { date: new Date("2024-01-02"), open: 100, high: 108, low: 98, close: 105 },
  { date: new Date("2024-01-03"), open: 105, high: 110, low: 102, close: 103 },
  { date: new Date("2024-01-04"), open: 103, high: 112, low: 101, close: 110 },
  { date: new Date("2024-01-05"), open: 110, high: 115, low: 107, close: 108 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <CandlestickChart data={ohlcData}>
  <Grid horizontal vertical />
  <Candlestick />
  <XAxis />
  <YAxis />
  <ChartTooltip />
</CandlestickChart>
      </div>
    </div>
  )
}
