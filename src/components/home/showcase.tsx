'use client';

import { Bar, BarChart, XAxis } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export function ComponentsShowcase() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-3">
      <Input placeholder="Search tokens…" aria-label="Search tokens" />
      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center gap-2 text-sm">
          <Switch defaultChecked /> Dark mode
        </label>
        <Badge variant="secondary">v2.0</Badge>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="flex-1">
          Save
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}

const data = [
  { m: 'J', a: 186, b: 80 },
  { m: 'F', a: 305, b: 200 },
  { m: 'M', a: 237, b: 120 },
  { m: 'A', a: 173, b: 190 },
  { m: 'M', a: 209, b: 130 },
  { m: 'J', a: 264, b: 140 },
];
const config = {
  a: { label: 'Desktop', color: 'var(--chart-1)' },
  b: { label: 'Mobile', color: 'var(--chart-3)' },
} satisfies ChartConfig;

export function ChartsShowcase() {
  return (
    <ChartContainer config={config} className="aspect-auto h-36 w-full max-w-64">
      <BarChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="m" tickLine={false} axisLine={false} tickMargin={6} />
        <Bar dataKey="a" fill="var(--color-a)" radius={3} />
        <Bar dataKey="b" fill="var(--color-b)" radius={3} />
      </BarChart>
    </ChartContainer>
  );
}
