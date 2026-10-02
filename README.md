# components

Design systems and interactive component galleries for [TimBlazing projects](https://github.com/timblazing). Built with Next.js.

Explore the live galleries at [components.blasingame.dev](https://components.blasingame.dev).

The home page shows the [Fillrate](https://github.com/timblazing/fillrate) design system: foundations, primitives, fulfillment components, charts, maps, and full-screen block previews. Examples use synthetic data and run without the Fillrate backend.

Choose **sportscal** in the header to explore its foundations, Radix primitives, and interactive calendar components at [components.blasingame.dev/sportscal](https://components.blasingame.dev/sportscal). Components are copied from [Sportscal](https://github.com/timblazing/sportscal/tree/1f34856a44d47454c9773ac26b5c16139ad305f6); examples use an illustrative schedule.

Choose **sleeper-fantasy-dashboard** for its foundations and primitives at [components.blasingame.dev/sleeper-fantasy-dashboard](https://components.blasingame.dev/sleeper-fantasy-dashboard). Tokens and source components come from [Sleeper Fantasy Dashboard](https://github.com/timblazing/sleeper-fantasy-dashboard/tree/45a18eb2f82eaa838fc5a903087d08db921a3529); examples use illustrative league data.

Project selection is defined in `src/lib/projects.ts`; the Fillrate gallery lives in `src/components/projects/fillrate/`.

Extracted from Fillrate commit [`8027888`](https://github.com/timblazing/fillrate/tree/8027888a90ea6f4f45b7abcc4f81152dd1476624). The gallery retains its original component implementations and synthetic fixtures; only the app shell, routes, and contract type imports were adapted.

## Deploy

Every push to `main` builds AMD64 and ARM64 images at `ghcr.io/timblazing/components:latest`, plus a tag containing the full commit SHA.

Copy `compose.yaml` to your server, then run:

```sh
docker compose pull
docker compose up -d
```

The app is available on port 3000. Run the same commands to update; change the host port in the Compose file if needed. No database, volumes, or environment variables are required.
