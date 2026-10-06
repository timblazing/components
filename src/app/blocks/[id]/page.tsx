import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks, isBlockId } from "@/components/blocks/registry";

export function generateStaticParams() {
  return Object.keys(blocks).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps<"/blocks/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: isBlockId(id) ? blocks[id].title : "Block" };
}

// One block filling the viewport. The block viewer embeds this route.
export default async function BlockPage({ params }: PageProps<"/blocks/[id]">) {
  const { id } = await params;
  if (!isBlockId(id)) notFound();
  const { Block } = blocks[id];
  return <Block />;
}
