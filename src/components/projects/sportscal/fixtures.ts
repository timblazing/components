import type { CatalogTeam } from "./source/lib/client/api"
import type { SportsCalGame } from "./source/lib/types"
import type { LeagueKey } from "./source/lib/config/leagues"

// Illustrative games, not a live schedule. Team identities match the source project.
export const teams: CatalogTeam[] = [
  { id: "23", slug: "pittsburgh-steelers", name: "Steelers", shortName: "Steelers", displayName: "Pittsburgh Steelers", location: "Pittsburgh", abbreviation: "PIT", league: "nfl", tier: "primary" },
  { id: "33", slug: "baltimore-ravens", name: "Ravens", shortName: "Ravens", displayName: "Baltimore Ravens", location: "Baltimore", abbreviation: "BAL", league: "nfl", tier: "primary" },
  { id: "25", slug: "oklahoma-city-thunder", name: "Thunder", shortName: "Thunder", displayName: "Oklahoma City Thunder", location: "Oklahoma City", abbreviation: "OKC", league: "nba", tier: "primary" },
  { id: "6", slug: "dallas-mavericks", name: "Mavericks", shortName: "Mavericks", displayName: "Dallas Mavericks", location: "Dallas", abbreviation: "DAL", league: "nba", tier: "primary" },
  { id: "201", slug: "oklahoma-sooners", name: "Sooners", shortName: "Oklahoma", displayName: "Oklahoma Sooners", location: "Oklahoma", abbreviation: "OU", league: "ncaaf", tier: "primary" },
  { id: "251", slug: "texas-longhorns", name: "Longhorns", shortName: "Texas", displayName: "Texas Longhorns", location: "Texas", abbreviation: "TEX", league: "ncaaf", tier: "primary" },
]
export function gamesFor(team: CatalogTeam): SportsCalGame[] {
  const opponent = teams.find((t) => t.league === team.league && t.id !== team.id)!
  return Array.from({ length: 4 }, (_, i) => ({
    id: `demo-${team.id}-${i}`, league: team.league as LeagueKey, seasonId: 2026, seasonDisplayName: "2026",
    startDate: `2026-10-${String(4 + i * 7).padStart(2, "0")}T17:00:00Z`, localDate: `2026-10-${String(4 + i * 7).padStart(2, "0")}`,
    dateTBD: false, timeTBD: i === 3,
    seasonType: { name: i === 2 ? "Preseason" : "Regular season", normalized: i === 2 ? "preseason" : "regular" },
    homeTeam: i % 2 ? opponent : team, awayTeam: i % 2 ? team : opponent,
    selectedTeamHomeAway: i % 2 ? "away" : "home", neutralSite: false,
    venue: { name: i % 2 ? "Away arena" : "Home arena", city: i % 2 ? opponent.location : team.location },
    broadcasts: ["ESPN"], status: { state: "pre", completed: false, postponed: i === 3 },
  }))
}
