"use client"

// From the bklit package: import { RingChart, Ring, RingCenter } from "@bklitui/ui/charts"
import { RingChart, Ring, RingCenter } from "@/components/charts"

const ringData = [
  { label: "Email", value: 42, maxValue: 100 },
  { label: "Social", value: 28, maxValue: 100 },
  { label: "Direct", value: 18, maxValue: 100 },
  { label: "Other", value: 12, maxValue: 100 },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-3xl justify-center">
        <RingChart data={ringData} size={280} strokeWidth={14}>
  {ringData.map((item, i) => (
    <Ring index={i} key={item.label} />
  ))}
  <RingCenter defaultLabel="Channels" />
</RingChart>
      </div>
    </div>
  )
}
