import type { Metadata } from "next"
import { SleeperGallery } from "@/components/projects/sleeper/gallery"

export const metadata: Metadata = { title: "Sleeper Fantasy" }

export default function SleeperPage() { return <SleeperGallery /> }
