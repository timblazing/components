import { readFile } from "node:fs/promises";
import path from "node:path";
import { blockMetadata, type BlockId } from "@/components/blocks/metadata";

const registryName = "components";
const homepage = "https://github.com/timblazing/components";

function registryItem(id: BlockId, content: string) {
  const block = blockMetadata[id];
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: id,
    type: "registry:block",
    title: block.title,
    description: block.description,
    dependencies: ["lucide-react"],
    files: [
      {
        path: `${id}.tsx`,
        content,
        type: "registry:component",
        target: `components/blocks/${id}.tsx`,
      },
    ],
  };
}

function registryIndex() {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: registryName,
    homepage,
    items: (Object.keys(blockMetadata) as BlockId[]).map((id) => ({
      name: id,
      type: "registry:block",
      title: blockMetadata[id].title,
      description: blockMetadata[id].description,
      dependencies: ["lucide-react"],
      files: [{ path: `${id}.tsx`, type: "registry:component" }],
    })),
  };
}

export function generateStaticParams() {
  return ["registry.json", ...Object.keys(blockMetadata).map((id) => `${id}.json`)].map(
    (name) => ({ name }),
  );
}

export const dynamicParams = false;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  if (name === "registry.json") {
    return Response.json(registryIndex());
  }

  const id = name.slice(0, -".json".length);
  if (!name.endsWith(".json") || !(id in blockMetadata)) {
    return Response.json({ error: "Registry item not found" }, { status: 404 });
  }

  const blockId = id as BlockId;
  const content = await readFile(
    path.join(process.cwd(), "src/components/blocks/landing-page.tsx"),
    "utf8",
  );
  return Response.json(registryItem(blockId, content));
}
