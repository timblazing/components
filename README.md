# components

My personal development reference and public showcase for the design system used in my projects. Built with Next.js.

- `/` — landing page.
- `/foundations` — color, typography, spacing, shape, motion, patterns, and the design files.
- `/components` — references and attribution for shadcn/ui, coss ui, blocks.so, and mapcn.
- `/blocks` — generic composed layouts (Landing Page) with preview and source.
- `/projects` — composed interfaces from my projects.
Appearance follows the system theme. Shared tokens are in `src/styles/system-tokens.css`; design notes are in [docs/design/DESIGN.md](docs/design/DESIGN.md), published with theme, variables, and token files at `/design/`.

## Development

```sh
bun install
bun run dev
```

If port 3000 is occupied, use `bun run dev -- --port 3001`.

```sh
bun run lint
bun run typecheck
bun run build
```

The original source galleries and synthetic fixtures remain under `src/components/projects/`. Full-screen Fillrate blocks remain at `/fillrate/blocks/[id]`.

## Deploy

Every push to `main` builds AMD64 and ARM64 images at `ghcr.io/timblazing/components:latest`, plus a tag containing the full commit SHA.

Copy `compose.yaml` to your server, then run:

```sh
docker compose pull
docker compose up -d
```

The app is available on port 3000. Run the same commands to update; change the host port in the Compose file if needed. No database, volumes, or environment variables are required.
