import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { BlockPreview } from '@/components/preview/block-preview';
import { ComponentPreview } from '@/components/preview/component-preview';
import { ComponentSource } from '@/components/preview/component-source';
import * as Foundations from '@/components/foundations';
import { PageGrid } from '@/components/page-grid';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Tab,
    Tabs,
    BlockPreview,
    ComponentPreview,
    ComponentSource,
    ...Foundations,
    PageGrid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
