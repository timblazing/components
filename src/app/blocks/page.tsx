import { BlockReference } from "@/components/design-system/block-reference";
import { PageHeader, Section } from "@/components/design-system/layout";

export const metadata = { title: "Blocks" };
export default function BlocksPage() {
  return (
    <>
      <PageHeader
        title="Blocks"
        description="Composed interfaces from my projects. Open one to preview it here, or full screen."
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
