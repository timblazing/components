export const blockMetadata = {
  "landing-page": {
    title: "Landing Page",
    description:
      "A marketing page: hero, product frame, features, split section, call to action, and footer.",
    file: "src/components/blocks/landing-page.tsx",
  },
} as const;

export type BlockId = keyof typeof blockMetadata;
