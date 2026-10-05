import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FullscreenBlock, type BlockId } from "@/components/projects/fillrate/sections/blocks"
import { toc } from "@/components/projects/fillrate/toc"

const blockItems = toc.find((g) => g.id === "blocks")!.items

function block(id: string) {
  return blockItems.find(([blockId]) => blockId === id)
}

export async function generateMetadata({ params }: PageProps<"/fillrate/blocks/[id]">): Promise<Metadata> {
  const item = block((await params).id)
  return { title: item ? `${item[1]} · Fillrate` : "Fillrate" }
}

// One gallery block filling the viewport, for design review and screenshots.
export default async function FullscreenBlockPage({ params }: PageProps<"/fillrate/blocks/[id]">) {
  const item = block((await params).id)
  if (!item) notFound()
  return <FullscreenBlock id={item[0] as BlockId} />
}
