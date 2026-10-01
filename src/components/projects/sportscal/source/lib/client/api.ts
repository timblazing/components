import type { SportsCalTeam } from "../types";
export interface CatalogTeam extends SportsCalTeam { tier: "primary" | "secondary" | "other"; subdivision?: string; }
