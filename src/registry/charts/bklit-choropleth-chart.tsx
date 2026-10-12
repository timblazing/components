"use client"

// From the bklit package: import { ChoroplethChart, ChoroplethFeatureComponent, ChoroplethTooltip } from "@bklitui/ui/charts"
import { useEffect, useState } from "react"
import type { FeatureCollection, Geometry } from "geojson"
import { feature } from "topojson-client"
import {
  ChoroplethChart,
  ChoroplethFeatureComponent,
  ChoroplethTooltip,
} from "@/components/charts"

const WORLD_DATA_URL =
  "https://raw.githubusercontent.com/subyfly/topojson/refs/heads/master/world-countries.json"

type World = FeatureCollection<Geometry, { name: string }>

export default function Component() {
  const [world, setWorld] = useState<World | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(WORLD_DATA_URL)
      .then((res) => res.json())
      // biome-ignore lint/suspicious/noExplicitAny: topojson is untyped JSON
      .then((topology: any) => {
        const key = Object.keys(topology.objects)[0]
        if (!cancelled && key) {
          setWorld(feature(topology, topology.objects[key]) as unknown as World)
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        {world ? (
          <ChoroplethChart data={world} aspectRatio="2 / 1">
            <ChoroplethFeatureComponent />
            <ChoroplethTooltip />
          </ChoroplethChart>
        ) : (
          <div className="flex aspect-[2/1] items-center justify-center text-muted-foreground text-sm">
            Loading map…
          </div>
        )}
      </div>
    </div>
  )
}
