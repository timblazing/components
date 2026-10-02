"use client"

import { useState } from "react"
import { ArrowRight, Search } from "lucide-react"
import { Group, Specimen } from "../fillrate/specimen"
import { Button } from "./source/ui/button"
import { Badge } from "./source/ui/badge"
import { Input } from "./source/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./source/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./source/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./source/ui/card"
import { Skeleton } from "./source/ui/skeleton"

export function SleeperPrimitives() {
  const [query, setQuery] = useState("")
  const [season, setSeason] = useState("2026")

  return <Group id="primitives" index={2} title="Primitives" description="Source components from the Sleeper dashboard, shown with illustrative league content. Controls here are local examples and do not connect to a league.">
    <Specimen id="actions" title="Actions" description="One teal primary action per context; neutral variants support the rest of the toolbar.">
      <div className="flex flex-wrap items-center gap-3"><Button>View matchup <ArrowRight /></Button><Button variant="outline">Compare teams</Button><Button variant="secondary">All players</Button><Button variant="ghost">Reset filters</Button><Button variant="destructive">Remove league</Button><Button disabled>Unavailable</Button></div>
      <div className="mt-5 flex flex-wrap items-end gap-3"><Button size="xs">Extra small</Button><Button size="sm">Small</Button><Button size="default">Default</Button><Button size="lg">Large</Button></div>
    </Specimen>
    <Specimen id="forms" title="Form controls" description="Search and season controls use compact heights and a blue focus ring distinct from the primary teal.">
      <div className="grid max-w-2xl gap-5 sm:grid-cols-2"><div className="space-y-2"><label htmlFor="sleeper-search" className="text-sm font-medium">Search players</label><div className="relative"><Search aria-hidden="true" className="pointer-events-none absolute left-2.5 top-2 size-4 text-muted-foreground" /><Input id="sleeper-search" className="pl-8" placeholder="Name or team" value={query} onChange={(event) => setQuery(event.target.value)} /></div><p className="text-xs text-muted-foreground">{query ? `Searching for “${query}”` : "Try typing a player name."}</p></div><div className="space-y-2"><label htmlFor="sleeper-season" className="text-sm font-medium">Season</label><Select value={season} onValueChange={(value) => { if (value) setSeason(value) }}><SelectTrigger id="sleeper-season" className="w-full"><SelectValue /></SelectTrigger><SelectContent className="sleeper-select-popup"><SelectItem value="2026">2026 season</SelectItem><SelectItem value="2025">2025 season</SelectItem><SelectItem value="2024">2024 season</SelectItem></SelectContent></Select><p className="text-xs text-muted-foreground">Selected: {season}</p></div></div>
    </Specimen>
    <Specimen id="badges" title="Badges" description="Compact labels show state; position badges use categorical colors without competing with the teal action.">
      <div className="flex flex-wrap items-center gap-2"><Badge>Live</Badge><Badge variant="secondary">Regular season</Badge><Badge variant="outline">Projected</Badge><Badge variant="destructive">Out</Badge>{[["QB", "positionQb"], ["RB", "positionRb"], ["WR", "positionWr"], ["TE", "positionTe"]].map(([label, variant]) => <Badge key={label} variant={variant as "positionQb" | "positionRb" | "positionWr" | "positionTe"} size="position">{label}</Badge>)}</div>
    </Specimen>
    <Specimen id="tabs" title="Tabs" description="The segmented tab treatment groups neighboring views in the dashboard.">
      <Tabs defaultValue="matchups" className="max-w-xl"><TabsList><TabsTrigger value="matchups">Matchups</TabsTrigger><TabsTrigger value="standings">Standings</TabsTrigger><TabsTrigger value="players">Players</TabsTrigger></TabsList><TabsContent value="matchups" className="rounded-xl border bg-card p-4 text-muted-foreground">Weekly scores and projected winners.</TabsContent><TabsContent value="standings" className="rounded-xl border bg-card p-4 text-muted-foreground">League records and playoff position.</TabsContent><TabsContent value="players" className="rounded-xl border bg-card p-4 text-muted-foreground">Roster and free agent comparison.</TabsContent></Tabs>
    </Specimen>
    <Specimen id="surfaces" title="Cards & loading" description="Cards organize league information; a quiet skeleton holds the same space while data loads.">
      <div className="grid gap-4 md:grid-cols-2"><Card><CardHeader><CardTitle>League pulse</CardTitle><CardDescription>Week 4 snapshot</CardDescription></CardHeader><CardContent><div className="flex items-baseline justify-between"><span className="text-sm text-muted-foreground">Top projection</span><span className="font-mono text-xl font-semibold tabular-nums">128.42</span></div><div className="mt-3 flex items-baseline justify-between"><span className="text-sm text-muted-foreground">Closest matchup</span><span className="font-mono text-sm tabular-nums">3.8 pts</span></div></CardContent></Card><Card><CardHeader><CardTitle>Loading league</CardTitle><CardDescription>Placeholder for incoming data</CardDescription></CardHeader><CardContent className="space-y-3"><Skeleton className="h-5 w-3/4" /><Skeleton className="h-4 w-1/2" /><Skeleton className="h-4 w-2/3" /></CardContent></Card></div>
    </Specimen>
  </Group>
}
