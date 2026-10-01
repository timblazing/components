import type { Metadata } from "next"
import { SportscalGallery } from "@/components/projects/sportscal/gallery"

export const metadata: Metadata = { title: "sportscal · components" }
export default function SportscalPage() { return <SportscalGallery /> }
