import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  DesignFiles,
  type DesignFile,
} from "@/components/design-system/design-files";

export const designFiles = [
  { id: "design", label: "DESIGN.md", filename: "DESIGN.md" },
  { id: "tailwind", label: "Tailwind v4", filename: "theme.css" },
  { id: "variables", label: "CSS Variables", filename: "variables.css" },
  { id: "tokens", label: "Design Tokens", filename: "tokens.json" },
] as const;

/** Reads the published files from public/design (written by `bun run reference:sync`). */
export async function DesignFilesSection() {
  const files: DesignFile[] = await Promise.all(
    designFiles.map(async (f) => ({
      ...f,
      content: await readFile(path.join(process.cwd(), "public/design", f.filename), "utf8"),
    })),
  );
  return <DesignFiles files={files} />;
}
