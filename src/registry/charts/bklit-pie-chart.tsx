"use client"

// From the bklit package: import { PieChart, PieSlice, PieCenter } from "@bklitui/ui/charts"
import { PieChart, PieSlice, PieCenter } from "@/components/charts"

const pieData = [
  { label: "Direct", value: 320 },
  { label: "Organic", value: 280 },
  { label: "Referral", value: 190 },
  { label: "Social", value: 140 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <PieChart data={pieData} size={280}>
  {pieData.map((item, i) => (
    <PieSlice index={i} key={item.label} />
  ))}
  <PieCenter defaultLabel="Traffic" />
</PieChart>
      </div>
    </div>
  )
}
