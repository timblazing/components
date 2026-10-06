export const colors = [
  {
    name: "Canvas",
    token: "background",
    value: "#0a0a0a",
    description: "The page itself.",
  },
  {
    name: "Surface",
    token: "card",
    value: "#171717",
    description: "Cards and raised content.",
  },
  {
    name: "Subtle",
    token: "muted",
    value: "#262626",
    description: "Quiet fills and grouping.",
  },
  {
    name: "Border",
    token: "border",
    value: "rgba(255,255,255,0.1)",
    description: "Structure without noise.",
  },
  {
    name: "Secondary text",
    token: "muted-foreground",
    value: "#a1a1a1",
    description: "Supporting information.",
  },
  {
    name: "Primary text",
    token: "foreground",
    value: "#fafafa",
    description: "Content and primary actions.",
  },
] as const;
