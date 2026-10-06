import { readFile } from "node:fs/promises";
import path from "node:path";
import { BlockViewer } from "@/components/blocks/block-viewer";
import { blocks, type BlockId } from "@/components/blocks/registry";
import { PageHeader } from "@/components/design-system/layout";

export const metadata = { title: "Blocks" };

export default async function BlocksPage() {
  const ids = Object.keys(blocks) as BlockId[];
  const sources = await Promise.all(
    ids.map((id) => readFile(path.join(process.cwd(), blocks[id].file), "utf8")),
  );
  return (
    <>
      <PageHeader
        title="Blocks"
        description="Generic, composed layouts built on my foundations. Preview, resize, copy the source, or open one full screen."
      />
      <div className="ds-container" style={{ paddingBottom: 96, display: "grid", gap: 64 }}>
        {ids.map((id, i) => (
          <BlockViewer
            key={id}
            id={id}
            title={blocks[id].title}
            description={blocks[id].description}
            file={blocks[id].file}
            source={sources[i]}
          />
        ))}
      </div>
    </>
  );
}
