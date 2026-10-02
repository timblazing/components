import { Group, Specimen } from "../fillrate/specimen"

const surfaces = [
  ["background", "Page ground"], ["card", "Panel"], ["secondary", "Chrome"],
  ["primary", "Primary action"], ["foreground", "Text"], ["muted-foreground", "Quiet text"],
] as const

const results = [
  ["positive", "Positive", "+12.4 pts"],
  ["warning", "Warning", "Questionable"],
  ["negative", "Negative", "−8.2 pts"],
] as const

const positions = ["qb", "rb", "wr", "te"] as const

export function SleeperFoundations() {
  return <Group id="foundations" index={1} title="Foundations" description="Cool near-neutral layers keep dense league data readable. Sleeper teal marks the main action and selected state; blue is reserved for keyboard focus.">
    <Specimen id="color" title="Color" description="The source app defines light and dark roles with the same semantic names. Switch the gallery theme to compare both palettes.">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {surfaces.map(([token, label]) => <div key={token} className="overflow-hidden rounded-xl border bg-card">
          <div className="flex h-24 items-end p-3" style={{ background: `var(--${token})`, color: token === "primary" ? "var(--primary-foreground)" : token === "foreground" ? "var(--background)" : "var(--foreground)" }}><span className="text-sm font-medium">{label}</span></div>
          <p className="border-t px-3 py-2 font-mono text-xs text-muted-foreground">--{token}</p>
        </div>)}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">{["border", "input", "ring"].map((token) => <div key={token} className="flex items-center gap-2 text-xs"><span className="size-7 rounded-md border-[3px] bg-card" style={{ borderColor: `var(--${token})` }} /><span className="font-mono">--{token}</span></div>)}</div>
    </Specimen>
    <Specimen id="semantic-color" title="Results & positions" description="Good and bad results use semantic colors. Football positions use a separate, stable categorical set: QB red, RB green, WR blue, TE amber.">
      <div className="grid gap-3 sm:grid-cols-3">{results.map(([token, label, example]) => <div key={token} className="rounded-xl border bg-card p-4"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 font-mono text-lg font-semibold tabular-nums" style={{ color: `var(--${token})` }}>{example}</p><p className="mt-2 font-mono text-xs text-muted-foreground">--{token}</p></div>)}</div>
      <div className="mt-4 flex flex-wrap gap-3">{positions.map((position) => <div key={position} className="flex items-center gap-2 rounded-lg border bg-card p-2 pr-3"><span className="rounded-md px-2 py-1 font-mono text-xs font-semibold uppercase" style={{ background: `var(--position-${position}-background)`, color: `var(--position-${position}-foreground)` }}>{position}</span><span className="font-mono text-xs text-muted-foreground">--position-{position}</span></div>)}</div>
    </Specimen>
    <Specimen id="type" title="Typography" description="Geist carries headings and interface copy; Geist Mono makes scores, ranks, and compact position labels easy to scan.">
      <div className="space-y-5 rounded-xl border bg-card p-5 sm:p-6"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">League overview</p><p className="text-lg font-semibold tracking-tight">Week 4 matchups</p><p className="max-w-xl text-sm text-muted-foreground">Follow your league, compare rosters, and see where the playoff race stands.</p><div className="flex flex-wrap items-baseline gap-4 font-mono tabular-nums"><span className="text-3xl font-semibold">128.42</span><span className="text-sm text-muted-foreground">projected points</span><span className="text-xs text-muted-foreground">WR · 17.8 PPG</span></div></div>
    </Specimen>
    <Specimen id="radius" title="Radius & spacing" description="A 4px spacing unit and 8px base radius support compact controls, softly rounded panels, and dense tables.">
      <div className="flex flex-wrap items-end gap-6">{[["rounded-md", "6px control"], ["rounded-lg", "8px base"], ["rounded-xl", "12px panel"], ["rounded-full", "Pill"]].map(([shape, label]) => <div key={shape} className="space-y-2"><div className={`h-16 w-24 border bg-secondary ${shape}`} /><p className="text-xs text-muted-foreground">{label}</p></div>)}</div>
      <div className="mt-6 flex items-end gap-4">{[1, 2, 3, 4, 6].map((unit) => <div key={unit} className="space-y-2 text-center"><div className="mx-auto w-5 rounded-sm bg-primary" style={{ height: `${unit * 4}px` }} /><p className="font-mono text-xs text-muted-foreground">{unit * 4}px</p></div>)}</div>
    </Specimen>
  </Group>
}
