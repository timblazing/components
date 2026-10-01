# components

Design systems and interactive component galleries for [TimBlazing projects](https://github.com/timblazing). Built with Next.js.

The home page currently shows the [Fillrate](https://github.com/timblazing/fillrate) design system: foundations, primitives, fulfillment components, charts, maps, and full-screen block previews. Examples use synthetic data and run without the Fillrate backend.

Project navigation is defined in `src/lib/projects.ts`; the Fillrate gallery lives in `src/components/projects/fillrate/`.

Extracted from Fillrate commit [`8027888`](https://github.com/timblazing/fillrate/tree/8027888a90ea6f4f45b7abcc4f81152dd1476624). The gallery retains its original component implementations and synthetic fixtures; only the app shell, routes, and contract type imports were adapted.
