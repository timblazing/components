"use client"

// From the bklit package: import { FunnelChart } from "@bklitui/ui/charts"
import { FunnelChart } from "@/components/charts"

const funnelData = [
  { label: "Visitors", value: 12000 },
  { label: "Signups", value: 4800 },
  { label: "Activated", value: 2100 },
  { label: "Paid", value: 840 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <FunnelChart data={funnelData} />
      </div>
    </div>
  )
}
