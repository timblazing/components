import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChartsShowcase, ComponentsShowcase } from '@/components/home/showcase';

function FoundationsShowcase() {
  const swatches = ['background', 'card', 'muted', 'border-strong', 'muted-foreground', 'foreground'];
  return (
    <div className="flex w-full max-w-64 flex-col gap-5">
      <div className="flex items-end gap-4">
        <span className="font-display text-6xl leading-none tracking-[-0.05em]">Aa</span>
        <span className="pb-1 font-mono text-xs text-muted-foreground">DM Sans · SF Pro</span>
      </div>
      <div className="grid grid-cols-6 overflow-hidden rounded-lg border">
        {swatches.map((token) => (
          <span key={token} className="h-10" style={{ background: `var(--${token})` }} />
        ))}
      </div>
      <div className="flex gap-1.5">
        {['success', 'warning', 'destructive', 'info'].map((token) => (
          <span key={token} className="size-2.5 rounded-full" style={{ background: `var(--${token})` }} />
        ))}
      </div>
    </div>
  );
}

function BlocksShowcase() {
  return (
    <div className="grid h-36 w-full max-w-64 grid-cols-[56px_1fr] overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-col gap-1.5 border-r bg-sidebar p-2">
        <span className="h-2 w-8 rounded-sm bg-foreground/70" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-1.5 rounded-sm bg-muted-foreground/30" />
        ))}
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-7 rounded-md border bg-card" />
          ))}
        </div>
        <span className="flex-1 rounded-md border bg-card" />
      </div>
    </div>
  );
}

const sections: { title: string; href: string; description: string; preview: ReactNode }[] = [
  {
    title: 'Foundations',
    href: '/foundations',
    description: 'Color, type, spacing, radius, elevation, and motion tokens.',
    preview: <FoundationsShowcase />,
  },
  {
    title: 'Components',
    href: '/components',
    description: 'Fifty-plus shadcn/ui components on Base UI, live and copyable.',
    preview: <ComponentsShowcase />,
  },
  {
    title: 'Blocks',
    href: '/blocks',
    description: 'Dashboards, sidebars, and auth pages composed from the components.',
    preview: <BlocksShowcase />,
  },
  {
    title: 'Charts',
    href: '/charts',
    description: 'Area, bar, line, pie, radar, and radial charts on the neutral ramp.',
    preview: <ChartsShowcase />,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border-strong)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 pt-24 pb-20 md:px-6 md:pt-32 md:pb-28">
          <h1 className="font-display max-w-3xl text-5xl leading-[0.95] font-medium tracking-[-0.05em] text-balance md:text-7xl">
            My personal design system.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            The foundations, components, blocks, and charts behind my projects. Built on shadcn/ui and Base UI, ready to copy.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="rounded-full px-5" nativeButton={false} render={<Link href="/foundations" />}>
              Read the foundations
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-5" nativeButton={false} render={<Link href="/components" />}>
              Browse components
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-px overflow-hidden px-4 py-16 sm:grid-cols-2 md:px-6 md:py-24">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group -m-px flex flex-col border bg-background transition-colors duration-150 hover:bg-card"
          >
            <div inert className="flex h-60 items-center justify-center border-b px-8">
              {section.preview}
            </div>
            <div className="flex items-start justify-between gap-4 p-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-medium">{section.title}</h2>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
              <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
