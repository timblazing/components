export const appName = 'blasingame.dev';
export const docsRoute = '/';

export const gitConfig = {
  user: 'timblazing',
  repo: 'components',
  branch: 'main',
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blasingame.dev';

export function getPageMarkdownUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `/llms.mdx/${segments.join('/')}` };
}
