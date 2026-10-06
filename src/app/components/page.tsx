import {
  Lead,
  PageHeader,
  Section,
  TextLink,
} from "@/components/design-system/layout";

export const metadata = { title: "Components" };
const libraries = [
  {
    name: "shadcn/ui",
    role: "Primary",
    description: "The starting point for core UI components in my projects.",
    detail:
      "Accessible, composable components with source code I can adapt to the shared design system.",
    use: "Buttons, forms, dialogs, navigation, and data display.",
    credit: "shadcn & Vercel",
    url: "https://ui.shadcn.com",
    reference: "https://ui.shadcn.com/docs/components",
    source: "https://github.com/shadcn-ui/ui",
  },
  {
    name: "coss ui",
    role: "Primitives",
    description: "An additional source for core controls built on Base UI.",
    detail:
      "A reference for accessible behavior, compact controls, and useful component APIs.",
    use: "Form controls, menus, overlays, and interactive primitives.",
    credit: "coss.com",
    url: "https://coss.com/ui",
    reference: "https://coss.com/ui",
    source: null,
  },
  {
    name: "blocks.so",
    role: "Compositions",
    description:
      "A reference for composed interfaces built with shadcn/ui and Tailwind.",
    detail:
      "Useful patterns to adapt when putting several core components together.",
    use: "Forms, dashboards, tables, dialogs, and application layouts.",
    credit: "Ephraim Duncan",
    url: "https://blocks.so",
    reference: "https://blocks.so",
    source: "https://github.com/ephraimduncan/blocks",
  },
  {
    name: "mapcn",
    role: "Maps",
    description:
      "React map components built on MapLibre and styled with Tailwind.",
    detail:
      "The map reference for projects that need geographic data and interaction.",
    use: "Maps, markers, popups, and geographic UI.",
    credit: "AnmolSaini16 / mapcn contributors",
    url: "https://www.mapcn.dev",
    reference: "https://www.mapcn.dev/docs",
    source: "https://github.com/AnmolSaini16/mapcn",
  },
] as const;

export default function ComponentsPage() {
  return (
    <>
      <PageHeader
        title="Components"
        description="The component libraries I use and reference when building my projects, with credit to the people who make them."
      />
      {libraries.map((library) => (
        <Section key={library.name} title={library.name}>
          <div className="library-meta">
            <span>{library.role}</span>
            <span>By {library.credit}</span>
          </div>
          <Lead strong={library.description}>{library.detail}</Lead>
          <p className="ds-body">
            <strong>Use for</strong> {library.use}
          </p>
          <div className="library-links">
            <TextLink href={library.url}>Website</TextLink>
            <TextLink href={library.reference}>Reference</TextLink>
            {library.source && (
              <TextLink href={library.source}>Source</TextLink>
            )}
          </div>
        </Section>
      ))}
    </>
  );
}
