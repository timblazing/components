import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blocks, isBlockName } from '@/registry/blocks';

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
  const { Component } = blocks[name];
  return <Component />;
}
