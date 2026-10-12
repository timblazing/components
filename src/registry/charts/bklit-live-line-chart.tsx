"use client"

// From the bklit package: import { LiveLineChart, LiveLine, LiveXAxis, LiveYAxis, ChartTooltip } from "@bklitui/ui/charts"
import { LiveLineChart, LiveLine, LiveXAxis, LiveYAxis, ChartTooltip } from "@/components/charts"

import { curveMonotoneX } from "@visx/curve";
import { useEffect, useState } from "react";

const nextValue = (prev: number) =>
  Math.min(90, Math.max(10, prev + (Math.random() - 0.5) * 8));

export default function Component() {
  const [data, setData] = useState<{ time: number; value: number }[]>([]);
  const [value, setValue] = useState(50);

  useEffect(() => {
    const now = Date.now() / 1000;
    let v = 50;
    const seed = Array.from({ length: 30 }, (_, i) => {
      v = nextValue(v);
      return { time: now - (30 - i), value: v };
    });
    // Seed on the client only: timestamps would otherwise mismatch during SSR.
    setData(seed);
    setValue(v);

    const id = setInterval(() => {
      v = nextValue(v);
      setData((prev) => [...prev.slice(-120), { time: Date.now() / 1000, value: v }]);
      setValue(v);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <LiveLineChart data={data} value={value} dataKey="value" window={30} className="h-72">
          <LiveLine dataKey="value" curve={curveMonotoneX} />
          <LiveXAxis />
          <LiveYAxis />
          <ChartTooltip />
        </LiveLineChart>
      </div>
    </div>
  )
}
