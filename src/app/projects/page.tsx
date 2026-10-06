import { BlockReference } from "@/components/design-system/block-reference";
import { PageHeader, Section } from "@/components/design-system/layout";

export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Composed interfaces from each project. Open one to preview it here, or full screen."
      />
      <Section
        title="Fillrate"
        description="Clustering, loads, and shipment planning."
        stacked
      >
        <BlockReference />
      </Section>
    </>
  );
}
