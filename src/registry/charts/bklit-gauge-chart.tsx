"use client"

// From the bklit package: import { Gauge } from "@bklitui/ui/charts"
import { Gauge } from "@/components/charts"



export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <Gauge
  value={72}
  centerValue={0.72}
  totalNotches={40}
  defaultLabel="Score"
  formatOptions={{ style: "percent" }}
/>
      </div>
    </div>
  )
}
