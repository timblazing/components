import { PageHeading } from "@/components/design-system/page-heading";
import { BlockReference } from "@/components/design-system/block-reference";
export const metadata = { title: "Blocks" };
export default function BlocksPage() {
  return (
    <div className="ds-content">
      <PageHeading
        title="Blocks"
        description="Composed interfaces from my projects."
      />
      <BlockReference />
    </div>
  );
}
