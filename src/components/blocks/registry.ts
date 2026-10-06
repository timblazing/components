import { LandingPage } from "@/components/blocks/landing-page";

export const blocks = {
  "landing-page": {
    title: "Landing Page",
    description:
      "A marketing page: hero, product frame, features, split section, call to action, and footer.",
    Block: LandingPage,
    file: "src/components/blocks/landing-page.tsx",
  },
} as const;

export type BlockId = keyof typeof blocks;

export function isBlockId(id: string): id is BlockId {
  return id in blocks;
}
