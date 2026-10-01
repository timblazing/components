"use client"

import dynamic from "next/dynamic"
import { GalleryShell } from "@/components/gallery-shell"
import { Skeleton } from "@/components/ui/skeleton"
import { Blocks } from "./sections/blocks"
import { Charts } from "./sections/charts"
import { Foundations } from "./sections/foundations"
import { exploreK } from "./fixtures"
import { Lab } from "./sections/lab"
import { Later } from "./sections/later"
import { Primitives } from "./sections/primitives"
import { Group, Specimen } from "./specimen"
import { toc } from "./toc"

const PipelineMap = dynamic(() => import("./pipeline-map"), { ssr: false, loading: () => <Skeleton className="h-[520px] w-full rounded-xl" /> })
function confidenceK7() { const e = exploreK(); const d = e.detail(7); return new Map(e.stopIds.map((id, i) => [id, d.confidence[i]])) }
export function Gallery() {
  return <GalleryShell toc={toc}>{(openSearch) => <>
    <Foundations />
    <Primitives onOpenCommand={openSearch} />
    <Lab />
    <Charts />
    <Group id="maps" index={5} load="windowed" title="Map" description="mapcn on MapLibre. Stops are one GeoJSON circle layer; hulls and the leg-limit ring use Turf. Colors come from useCssColors, since MapLibre can't read CSS variables.">
      <Specimen id="map" title="Pipeline map" description="Stops by cluster, cluster hulls, and the selected cluster's truck paths (straight schematic lines, open routes). Hollow red stops are beyond the leg limit. Click a stop or a swatch."><PipelineMap /></Specimen>
      <Specimen id="map-confidence" title="Confidence map" description="The same stops colored by k-explorer assignment confidence at k = 7. Unstable border stops stand out in red."><PipelineMap confidence={confidenceK7()} defaultMode="confidence" selectedCluster={null} /></Specimen>
    </Group>
    <Blocks />
    <Later />
  </>}</GalleryShell>
}
