import { ArrowUpRight } from "lucide-react";
import { PageHeading } from "@/components/design-system/page-heading";

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
    <div className="ds-content">
      <PageHeading
        title="Components"
        description="The component libraries I use and reference when building my projects."
      />
      <div className="library-reference">
        {libraries.map((library) => (
          <article className="library-entry" key={library.name}>
            <div className="library-identity">
              <span className="library-role">{library.role}</span>
              <h2>
                <a href={library.url} target="_blank" rel="noreferrer">
                  {library.name}
                  <ArrowUpRight size={17} />
                </a>
              </h2>
              <p className="library-credit">By {library.credit}</p>
            </div>
            <div className="library-description">
              <p>{library.description}</p>
              <p>{library.detail}</p>
              <div className="library-use">
                <span>Use for</span>
                <p>{library.use}</p>
              </div>
              <div className="library-links">
                <a href={library.reference} target="_blank" rel="noreferrer">
                  Reference <ArrowUpRight size={13} />
                </a>
                {library.source && (
                  <a href={library.source} target="_blank" rel="noreferrer">
                    Source <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
