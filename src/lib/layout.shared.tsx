import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

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
      title: <span className="font-display text-[15px] tracking-tight">{appName}</span>,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
