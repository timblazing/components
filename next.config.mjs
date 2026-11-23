import { createMDX } from 'fumadocs-mdx/next';

// Temporary, owner-authorized pilot of proj's broken-auto-merge detection.
// Cloudflare keeps the previous successful deployment serving when this fails.
if (process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH === 'main') {
  throw new Error('PROJ_REVERT_PILOT: intentional production build failure; remove this guard after the revert PR is verified.');
}

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
};

export default withMDX(config);
