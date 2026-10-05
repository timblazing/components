import { copyFile } from "node:fs/promises";

// Publish the canonical guide alongside the website for agents to read.
await copyFile(
  new URL("../docs/design-system.md", import.meta.url),
  new URL("../public/design-system.md", import.meta.url),
);
