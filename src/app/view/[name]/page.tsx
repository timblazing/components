import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blocks, isBlockName, type Block } from '@/registry/blocks';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(blocks).map((name) => ({ name }));
}

export async function generateMetadata({ params }: PageProps<'/view/[name]'>): Promise<Metadata> {
  const { name } = await params;
  return { title: isBlockName(name) ? blocks[name].title : 'Block', robots: { index: false } };
}

// One block filling the viewport. Block previews embed this route in an iframe.
export default async function BlockView({ params }: PageProps<'/view/[name]'>) {
  const { name } = await params;
  if (!isBlockName(name)) notFound();
  const block: Block = blocks[name];
  const { default: Component } = await block.load();
  if (!block.centered) return <Component />;
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center">
      <Component />
    </div>
  );
}
