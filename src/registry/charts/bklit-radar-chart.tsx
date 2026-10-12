"use client"

// From the bklit package: import { RadarChart, RadarGrid, RadarAxis, RadarLabels, RadarArea } from "@bklitui/ui/charts"
import { RadarChart, RadarGrid, RadarAxis, RadarLabels, RadarArea } from "@/components/charts"

const metrics = [
  { key: "speed", label: "Speed" },
  { key: "reliability", label: "Reliability" },
  { key: "comfort", label: "Comfort" },
  { key: "safety", label: "Safety" },
  { key: "efficiency", label: "Efficiency" },
];
const data = [
  {
    label: "Model A",
    values: { speed: 80, reliability: 70, comfort: 60, safety: 90, efficiency: 75 },
  },
  {
    label: "Model B",
    values: { speed: 55, reliability: 85, comfort: 80, safety: 65, efficiency: 90 },
  },
];

export default function Component() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-3xl justify-center">
        <RadarChart data={data} metrics={metrics} size={320}>
  <RadarGrid />
  <RadarAxis />
  <RadarLabels fontSize={10} offset={16} />
  {data.map((row, i) => (
    <RadarArea key={row.label} index={i} />
  ))}
</RadarChart>
      </div>
    </div>
  )
}
