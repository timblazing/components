import { readFile } from "node:fs/promises";
import path from "node:path";
import { BlockViewer } from "@/components/blocks/block-viewer";
import { blocks, type BlockId } from "@/components/blocks/registry";
import { PageHeader } from "@/components/design-system/layout";

export const metadata = { title: "Blocks" };

export default async function BlocksPage() {
  const ids = Object.keys(blocks) as BlockId[];
  const sourceFilesById = await Promise.all(
    ids.map(async (id) =>
      Promise.all(
        blocks[id].files.map(async (file) => ({
          path: file,
          content: await readFile(path.join(process.cwd(), file), "utf8"),
        })),
      ),
    ),
  );
  return (
    <>
      <PageHeader
        title="Blocks"
        description="Generic, composed layouts built on my foundations."
      />
      <div className="ds-container" style={{ paddingBottom: 96, display: "grid", gap: 64 }}>
        {ids.map((id, i) => (
          <BlockViewer
            key={id}
            id={id}
            title={blocks[id].title}
            installCommand={blocks[id].installCommand}
            sourceFiles={sourceFilesById[i]}
          />
        ))}
      </div>
    </>
  );
}
