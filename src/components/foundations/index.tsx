import { CopyToken } from './copy-token';
import { readThemeTokens } from './tokens';

/* Visual building blocks for the Foundations pages. Values come from global.css. */

export function ColorGrid({ tokens }: { tokens: string[] }) {
  const { light, dark } = readThemeTokens();
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {tokens.map((token) => (
        <CopyToken key={token} value={`var(--${token})`} className="overflow-hidden rounded-xl border bg-card">
          <div className="grid h-20 grid-cols-2 border-b">
            <div className="light" style={{ background: light[token] }} />
            <div className="dark" style={{ background: dark[token] ?? light[token] }} />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <code className="font-mono text-xs font-medium text-foreground">--{token}</code>
            <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 font-mono text-[11px] text-muted-foreground">
              <dt>Light</dt>
              <dd className="truncate" title={light[token]}>{light[token]}</dd>
              <dt>Dark</dt>
              <dd className="truncate" title={dark[token]}>{dark[token] ?? light[token]}</dd>
            </dl>
          </div>
        </CopyToken>
      ))}
    </div>
  );
}

export function ColorPairs({ pairs }: { pairs: [surface: string, text: string][] }) {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {pairs.map(([surface, text]) => (
        <div
          key={surface}
          className="flex h-24 flex-col justify-between rounded-xl border p-4"
          style={{ background: `var(--${surface})`, color: `var(--${text})` }}
        >
          <span className="text-sm font-medium">Aa — The quick brown fox</span>
          <code className="font-mono text-[11px] opacity-70">
            --{surface} / --{text}
          </code>
        </div>
      ))}
    </div>
  );
}

const typeScale = [
  { name: 'Display', className: 'font-display text-5xl leading-none tracking-[-0.05em] sm:text-6xl', spec: 'DM Sans · 48–72 · 500 · −0.05em', sample: 'Build it once.' },
  { name: 'Heading 1', className: 'font-display text-4xl font-medium leading-tight tracking-[-0.04em]', spec: 'DM Sans · 36 · 500 · −0.04em', sample: 'Foundations first' },
  { name: 'Heading 2', className: 'text-2xl font-semibold tracking-tight', spec: 'SF Pro · 24 · 600 · −0.025em', sample: 'Components that compose' },
  { name: 'Heading 3', className: 'text-xl font-semibold tracking-tight', spec: 'SF Pro · 20 · 600', sample: 'Blocks and charts' },
  { name: 'Body', className: 'text-base leading-7', spec: 'SF Pro · 16 · 400 · 1.75', sample: 'Every surface, control, and chart pulls from the same tokens, so both themes stay in step without per-component overrides.' },
  { name: 'Small', className: 'text-sm leading-6', spec: 'SF Pro · 14 · 400', sample: 'Used inside panels, tables, and menus.' },
  { name: 'Caption', className: 'text-xs text-muted-foreground', spec: 'SF Pro · 12 · 400', sample: 'Updated 2 minutes ago' },
  { name: 'Mono', className: 'font-mono text-[13px] tabular-nums', spec: 'SF Mono / Menlo · 13 · tabular', sample: '0123456789  96.8%  --border' },
];

export function TypeScale() {
  return (
    <div className="not-prose my-6 divide-y rounded-xl border">
      {typeScale.map((t) => (
        <div key={t.name} className="grid gap-3 p-5 md:grid-cols-[180px_1fr] md:gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{t.name}</span>
            <code className="font-mono text-[11px] text-muted-foreground">{t.spec}</code>
          </div>
          <p className={t.className}>{t.sample}</p>
        </div>
      ))}
    </div>
  );
}

export function FontFamilies() {
  const families = [
    { name: 'Display', token: '--font-display', className: 'font-display', stack: 'DM Sans, SF Pro Display, system-ui', use: 'Page titles and hero type only.' },
    { name: 'Sans', token: '--font-sans', className: 'font-sans', stack: 'SF Pro Text, SF Pro, -apple-system, system-ui', use: 'Everything else: UI, body, labels.' },
    { name: 'Mono', token: '--font-mono', className: 'font-mono', stack: 'SF Mono, Menlo, ui-monospace', use: 'Code, tokens, measurements.' },
  ];
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
      {families.map((f) => (
        <div key={f.name} className="flex flex-col gap-4 rounded-xl border bg-card p-5">
          <span className={`${f.className} text-5xl leading-none tracking-tight`}>Aa</span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{f.name}</span>
            <code className="font-mono text-[11px] text-muted-foreground">{f.token}</code>
            <span className="text-xs text-muted-foreground">{f.stack}</span>
          </div>
          <p className="mt-auto text-sm text-muted-foreground">{f.use}</p>
        </div>
      ))}
    </div>
  );
}

export function SpacingScale() {
  const steps = [1, 2, 3, 4, 6, 8, 12, 16, 24];
  return (
    <div className="not-prose my-6 divide-y rounded-xl border">
      {steps.map((n) => (
        <div key={n} className="grid grid-cols-[64px_72px_1fr] items-center gap-4 px-5 py-3">
          <code className="font-mono text-xs">{n}</code>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">{n * 4}px</span>
          <span className="h-3 rounded-sm bg-foreground/80" style={{ width: n * 4 }} />
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  const radii = [
    { name: 'sm', value: 'calc(var(--radius) * 0.6)', px: '4.8px', use: 'Checkboxes, kbd' },
    { name: 'md', value: 'calc(var(--radius) * 0.8)', px: '6.4px', use: 'Menu items, small controls' },
    { name: 'lg', value: 'var(--radius)', px: '8px', use: 'Buttons, inputs, tabs' },
    { name: 'xl', value: 'calc(var(--radius) * 1.4)', px: '11.2px', use: 'Cards, dialogs, popovers' },
    { name: '2xl', value: 'calc(var(--radius) * 1.8)', px: '14.4px', use: 'Feature surfaces' },
    { name: 'full', value: '9999px', px: '∞', use: 'Avatars, badges, switches' },
  ];
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <div
            className="aspect-[4/3] border-2 border-foreground/70 bg-muted"
            style={{ borderRadius: r.value === '9999px' ? '9999px' : `calc(${r.value} * 2)` }}
          />
          <div className="flex flex-col gap-0.5">
            <code className="font-mono text-xs font-medium">rounded-{r.name}</code>
            <span className="font-mono text-[11px] text-muted-foreground">{r.px}</span>
            <span className="text-xs text-muted-foreground">{r.use}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SurfaceStack() {
  return (
    <div className="not-prose my-6 rounded-xl border bg-background p-6">
      <code className="font-mono text-[11px] text-muted-foreground">--background</code>
      <div className="mt-3 rounded-xl border bg-card p-6">
        <code className="font-mono text-[11px] text-muted-foreground">--card</code>
        <div className="mt-3 rounded-lg bg-muted p-6">
          <code className="font-mono text-[11px] text-muted-foreground">--muted</code>
          <div className="mt-3 rounded-lg border bg-popover p-4 shadow-md">
            <code className="font-mono text-[11px] text-muted-foreground">--popover · shadow-md</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MotionScale() {
  const durations = [
    { name: 'Fast', value: '100–150ms', use: 'Hover and focus color, popover in/out' },
    { name: 'Base', value: '200ms', use: 'Small state changes, icon turns' },
    { name: 'Slow', value: '250–300ms', use: 'Disclosure height, sheets, drawers' },
  ];
  return (
    <div className="not-prose my-6 divide-y rounded-xl border">
      {durations.map((d) => (
        <div key={d.name} className="group grid grid-cols-[96px_96px_1fr] items-center gap-4 px-5 py-4">
          <span className="text-sm font-medium">{d.name}</span>
          <code className="font-mono text-xs text-muted-foreground">{d.value}</code>
          <span className="text-sm text-muted-foreground">{d.use}</span>
        </div>
      ))}
    </div>
  );
}
