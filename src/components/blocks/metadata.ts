export const blockMetadata = {
  "landing-page": {
    title: "Landing Page",
    description:
      "A marketing page: hero, product frame, features, split section, call to action, and footer.",
    installCommand: undefined,
    files: ["src/components/blocks/landing-page.tsx"],
  },
  dashboard: {
    title: "Dashboard",
    description: "An inset sidebar with secondary navigation.",
    installCommand: "npx shadcn@latest add sidebar-08",
    files: [
      "src/app/dashboard/page.tsx",
      "src/components/app-sidebar.tsx",
      "src/components/nav-main.tsx",
      "src/components/nav-projects.tsx",
      "src/components/nav-secondary.tsx",
      "src/components/nav-user.tsx",
    ],
  },
} as const;

export type BlockId = keyof typeof blockMetadata;
