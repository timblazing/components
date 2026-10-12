import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import { SiteLogo } from '@/components/site-logo';
import { gitConfig } from './shared';

export const sections = [
  { text: 'Foundations', url: '/foundations' },
  { text: 'Components', url: '/components' },
  { text: 'Blocks', url: '/blocks' },
  { text: 'Charts', url: '/charts' },
] as const;

export const navLinks: LinkItemType[] = sections.map((section) => ({
  ...section,
  active: 'nested-url',
}));

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <SiteLogo />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
