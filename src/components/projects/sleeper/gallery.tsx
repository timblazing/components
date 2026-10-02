"use client"

import { GalleryShell, type GalleryToc } from "@/components/gallery-shell"
import { SleeperFoundations } from "./foundations"
import { SleeperPrimitives } from "./primitives"
import "./tokens.css"

const toc: GalleryToc = [
  { id: "foundations", title: "Foundations", items: [["color", "Color"], ["semantic-color", "Results & positions"], ["type", "Typography"], ["radius", "Radius & spacing"]] },
  { id: "primitives", title: "Primitives", items: [["actions", "Actions"], ["forms", "Form controls"], ["badges", "Badges"], ["tabs", "Tabs"], ["surfaces", "Cards & loading"]] },
]

export function SleeperGallery() {
  return <GalleryShell toc={toc}><div className="sleeper-theme space-y-24"><SleeperFoundations /><SleeperPrimitives /></div></GalleryShell>
}
