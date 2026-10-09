# blasingame.dev

My personal design system: foundations, components, blocks, and charts, built on [shadcn/ui](https://ui.shadcn.com) (Base UI, `base-nova` style) and documented with [Fumadocs](https://fumadocs.dev).

## Develop

```sh
bun install
bun run dev        # http://localhost:3000
bun run build      # static export to out/
bun run types:check
```

## Structure

| Path | What |
| --- | --- |
| `content/docs/{foundations,components,blocks,charts}` | MDX pages. Each folder is a top-level tab. |
| `src/app/global.css` | Theme tokens. The Foundations pages read values from here. |
| `src/components/ui` | shadcn/ui components, installed with the CLI. |
| `src/registry/examples` | Component previews, one default export per file. |
| `src/registry/charts` | Chart previews from the shadcn chart gallery. |
| `src/registry/blocks` | Full-page blocks, rendered at `/view/<name>` and embedded in an iframe. |
| `scripts/registry.mjs` | Generates the lazy preview index (`src/registry/__index__.tsx`). |

Use a preview in MDX with `<ComponentPreview name="button-demo" />` or `<BlockPreview name="dashboard-01" />`.

## Deploy

The site is a static export (`output: 'export'`). Pushing to `main` builds `ghcr.io/timblazing/components` (nginx serving `out/` on port 3000) via `.github/workflows/docker.yml`; run it with `docker compose up -d`. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
