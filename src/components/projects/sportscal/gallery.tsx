"use client"

import { useState } from "react"
import { GalleryShell, type GalleryToc } from "@/components/gallery-shell"
import { Group, Specimen } from "../fillrate/specimen"
import { SportscalFoundations } from "./foundations"
import { SportscalPrimitives } from "./primitives"
import { LeagueSelector } from "./source/components/builder/league-selector"
import { TeamPicker } from "./source/components/builder/team-picker"
import { TeamSummary } from "./source/components/builder/team-summary"
import { GameTypeOptions } from "./source/components/builder/game-type-options"
import { DurationInput } from "./source/components/builder/duration-input"
import { TemplateEditor } from "./source/components/builder/template-editor"
import { EventPreview } from "./source/components/schedule/event-preview"
import { ScheduleEventRow } from "./source/components/schedule/schedule-event-row"
import { EventOverrideDialog, type OverrideTarget } from "./source/components/schedule/event-override-dialog"
import { TooltipProvider } from "./source/components/ui/tooltip"
import { buildCalendarEvents } from "./source/lib/calendar/events"
import { gameTemplateValues, renderTemplate } from "./source/lib/calendar/templates"
import { defaultConfig, type GameOverride } from "./source/lib/validation/calendar-config"
import { LEAGUES, type LeagueKey } from "./source/lib/config/leagues"
import { gamesFor, teams } from "./fixtures"
import "./tokens.css"

const toc: GalleryToc = [
  { id: "foundations", title: "Foundations", items: [["color", "Color"], ["status-color", "Status colors"], ["type", "Typography"], ["radius", "Radius & spacing"]] },
  { id: "primitives", title: "Primitives", items: [["actions", "Actions"], ["forms", "Form controls"], ["overlays", "Overlays"], ["feedback", "Feedback & data display"]] },
  { id: "calendar-components", title: "Calendar components", items: [["team-selection", "League & team selection"], ["team-summary", "Team summary"], ["game-types", "Game type filters"], ["event-formatting", "Event formatting"], ["event-preview", "Event preview"], ["schedule-rows", "Schedule & overrides"]] },
]

function CalendarComponents() {
  const [league, setLeague] = useState<LeagueKey>("nfl")
  const [teamId, setTeamId] = useState(teams[0].id)
  const team = teams.find((team) => team.id === teamId && team.league === league) ?? teams.find((team) => team.league === league)!
  const [include, setInclude] = useState({ regularSeason: true, postseason: true, preseason: false })
  const [duration, setDuration] = useState(210)
  const [title, setTitle] = useState("{team} {homeAwaySymbol} {opponent}")
  const [overrides, setOverrides] = useState<Record<string, GameOverride>>({})
  const [target, setTarget] = useState<OverrideTarget | null>(null)
  const games = gamesFor(team)
  const config = { ...defaultConfig(league, team), include, durationMinutes: duration, templates: { calendarName: "{team} {season} Schedule", title, description: "", location: "{venue}" }, overrides }
  const events = buildCalendarEvents(games, config, "gallery")
  const baseEvents = buildCalendarEvents(games, { ...config, overrides: {} }, "gallery")
  return <TooltipProvider><Group id="calendar-components" index={3} title="Calendar components" description="Source components from sportscal.site, using an illustrative schedule. Changes here update the examples below; no live schedule or backend is required.">
    <Specimen id="team-selection" title="League & team selection" description="Native radios for leagues and the searchable team picker. Try typing a team name or abbreviation.">
      <div className="grid max-w-3xl gap-6 sm:grid-cols-2"><LeagueSelector value={league} onChange={(next) => { setLeague(next); setDuration(LEAGUES[next].defaultDurationMinutes) }} /><TeamPicker teams={teams.filter((team) => team.league === league)} selected={team} loading={false} onSelect={(team) => setTeamId(team.id)} /></div>
    </Specimen>
    <Specimen id="team-summary" title="Team summary" description="The selected team, season state, and game count. Missing logos use the source abbreviation fallback."><TeamSummary team={team} season={{ espnSeason: 2026, displayName: "2026", status: "active" }} gameCount={events.filter((event) => event.included).length} /></Specimen>
    <Specimen id="game-types" title="Game type filters" description="Toggle a chip to change which schedule rows are included."><GameTypeOptions value={include} onChange={setInclude} counts={{ regularSeason: 3, preseason: 1, postseason: 0 }} /></Specimen>
    <Specimen id="event-formatting" title="Event formatting" description="Edit the title, insert variables at the caret, or reset the field. The event preview uses the same rendering code as Sportscal."><div className="grid gap-6 lg:grid-cols-[1fr_15rem]"><TemplateEditor label="Event title" help="Use variables to personalize every game." value={title} defaultValue="{team} {homeAwaySymbol} {opponent}" onChange={setTitle} maxLength={200} preview={renderTemplate(title, gameTemplateValues(games[0]))} /><DurationInput value={duration} onChange={setDuration} /></div></Specimen>
    <Specimen id="event-preview" title="Event preview" description="A timed game and an all-day postponed game, including location and broadcast details."><div className="grid gap-4 xl:grid-cols-2"><EventPreview event={events[0]} showBroadcast /><EventPreview event={events[3]} showBroadcast /></div></Specimen>
    <Specimen id="schedule-rows" title="Schedule & overrides" description="Home and away, filtered games, and postponed start times. Edit a row to save a title, duration, or exclusion override."><ul className="divide-y overflow-hidden rounded-lg border bg-card">{events.map((event, i) => <ScheduleEventRow key={event.gameId} event={event} onEdit={() => setTarget({ event, base: baseEvents[i], override: overrides[event.gameId] })} />)}</ul></Specimen>
    <EventOverrideDialog target={target} onOpenChange={(open) => { if (!open) setTarget(null) }} onSave={(id, override) => setOverrides((current) => { const next = { ...current }; if (override) next[id] = override; else delete next[id]; return next })} />
  </Group></TooltipProvider>
}

export function SportscalGallery() {
  return <GalleryShell toc={toc}><div className="sportscal-theme space-y-24"><SportscalFoundations /><SportscalPrimitives /><CalendarComponents /></div></GalleryShell>
}
