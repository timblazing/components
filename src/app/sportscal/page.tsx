import type { Metadata } from "next"
import { SportscalGallery } from "@/components/projects/sportscal/gallery"

export const metadata: Metadata = { title: "SportsCal" }
export default function SportscalPage() { return <SportscalGallery /> }
