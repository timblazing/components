import { Group, Specimen } from "../fillrate/specimen"

const surfaces = ["background", "card", "popover", "primary", "secondary", "muted", "accent"]
export function SportscalFoundations() {
  return <Group id="foundations" index={1} title="Foundations" description="Sportscal’s neutral palette and Geist typography. Dark tokens come from the source app; light previews use the gallery’s neutral theme.">
    <Specimen id="color" title="Color" description="Surface and content pairs, with the same semantic token names as the source app.">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{surfaces.map((token) => <div key={token} className="overflow-hidden rounded-xl border bg-card">
        <div className="flex h-24 items-end justify-between p-3" style={{ background: `var(--${token})`, color: `var(--${token === "muted" ? "muted-foreground" : ["background"].includes(token) ? "foreground" : `${token}-foreground`})` }}>Aa<span className="text-[10px] opacity-70">foreground</span></div>
        <div className="border-t px-3 py-2 font-mono text-xs">--{token}</div>
      </div>)}</div>
      <div className="mt-6 flex flex-wrap gap-6">{["border", "border-strong", "input", "ring"].map((token) => <div key={token} className="flex items-center gap-2"><span className="size-9 rounded-lg border-2 bg-card" style={{ borderColor: `var(--${token})` }} /><span className="font-mono text-xs">--{token}</span></div>)}</div>
    </Specimen>
    <Specimen id="status-color" title="Status colors" description="Color supports a written status. Home and away are expressed with vs and @, rather than color.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["success", "Live"], ["warning", "Postponed"], ["destructive", "Canceled"], ["info", "Calendar information"]].map(([token, label]) => <div key={token} className="rounded-lg border bg-card p-4"><div className="flex items-center gap-2 text-sm" style={{ color: `var(--${token})` }}><span className="size-2 rounded-full bg-current" />{label}</div><p className="mt-3 font-mono text-xs text-muted-foreground">--{token}</p></div>)}</div>
    </Specimen>
    <Specimen id="type" title="Typography">
      <div className="space-y-5"><p className="text-4xl font-semibold tracking-tight">Clean sports schedules for your calendar.</p><p className="text-lg font-semibold tracking-tight">Pittsburgh Steelers</p><p className="text-sm text-muted-foreground">Pick a team, tune how games appear, then download or subscribe.</p><p className="font-mono text-xs tabular">Oct 04 · 1:00 PM · 3 hr 30 min</p></div>
    </Specimen>
    <Specimen id="radius" title="Radius & spacing" description="An 8px base radius, compact controls, and quiet borders keep the builder focused on its settings and schedule.">
      <div className="flex flex-wrap items-end gap-6">{[["rounded-md", "6px"], ["rounded-lg", "8px"], ["rounded-xl", "12px"], ["rounded-full", "Pill"]].map(([shape, label]) => <div key={label} className="space-y-2"><div className={`h-16 w-24 border bg-secondary ${shape}`} /><p className="text-xs text-muted-foreground">{label}</p></div>)}</div>
    </Specimen>
  </Group>
}
