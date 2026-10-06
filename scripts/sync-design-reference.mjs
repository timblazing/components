import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

// Publish the design files at /design/. variables.css and tokens.json are generated
// from src/styles/system-tokens.css so the palette has a single source.
const root = new URL("../", import.meta.url);
const out = new URL("public/design/", root);
await mkdir(out, { recursive: true });

const css = await readFile(new URL("src/styles/system-tokens.css", root), "utf8");

function parse(block) {
  const tokens = {};
  for (const [, name, value] of block.matchAll(/--([\w-]+):\s*([^;]+);/g)) tokens[name] = value.trim();
  return tokens;
}
const light = parse(css.slice(0, css.indexOf(".dark")));
const dark = parse(css.slice(css.indexOf(".dark")));
// Resolve var() aliases (sidebar tokens) against the same theme.
const resolve = (tokens) =>
  Object.fromEntries(
    Object.entries(tokens).map(([k, v]) => [k, v.replace(/var\(--([\w-]+)\)/, (_, n) => tokens[n] ?? v)]),
  );

const variables = `/* Generated from src/styles/system-tokens.css. Do not edit. */
${css.trim()}

:root {
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, monospace;
  --container: 1288px;
  --gutter: 24px;
  --header-height: 60px;
  --section-space: 96px;
}
`;

const color = (tokens) =>
  Object.fromEntries(
    Object.entries(resolve(tokens))
      .filter(([k]) => !["radius"].includes(k))
      .map(([k, v]) => [k, { $value: v, $type: "color" }]),
  );

const tokens = {
  color: { light: color(light), dark: color(dark) },
  fontFamily: {
    sans: { $value: "DM Sans", $type: "fontFamily" },
    mono: { $value: "Geist Mono", $type: "fontFamily" },
  },
  typography: {
    display: { fontSize: "48–72px", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.05em" },
    heading: { fontSize: "36px", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.04em" },
    lead: { fontSize: "26px", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.025em" },
    title: { fontSize: "20px", fontWeight: 500, letterSpacing: "-0.015em" },
    body: { fontSize: "16px", fontWeight: 400, lineHeight: 1.625 },
    caption: { fontSize: "12px", fontWeight: 400 },
  },
  spacing: Object.fromEntries([4, 8, 12, 16, 24, 32, 48, 64, 96].map((n) => [n, { $value: `${n}px`, $type: "dimension" }])),
  radius: {
    control: { $value: "8px", $type: "dimension" },
    panel: { $value: "12px", $type: "dimension" },
    feature: { $value: "16px", $type: "dimension" },
    pill: { $value: "999px", $type: "dimension" },
  },
  layout: {
    container: { $value: "1288px", $type: "dimension" },
    gutter: { $value: "24px", $type: "dimension" },
    header: { $value: "60px", $type: "dimension" },
    section: { $value: "96px", $type: "dimension" },
  },
  motion: {
    fast: { $value: "150ms", $type: "duration" },
    base: { $value: "200ms", $type: "duration" },
    slow: { $value: "250ms", $type: "duration" },
  },
};

await writeFile(new URL("variables.css", out), variables);
await writeFile(new URL("tokens.json", out), JSON.stringify(tokens, null, 2) + "\n");
await copyFile(new URL("docs/design/DESIGN.md", root), new URL("DESIGN.md", out));
await copyFile(new URL("docs/design/theme.css", root), new URL("theme.css", out));
