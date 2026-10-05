# components

My personal development reference and public showcase for the design system used in my projects.

## Pages

- `/`: Foundations — color, typography, spacing, shape, and motion.
- `/components`: references and attribution for shadcn/ui, coss ui, blocks.so, and mapcn.
- `/blocks`: composed interfaces from my projects.

Appearance follows the user's system preference. There is no theme switch or manual appearance setting.

## Foundations

Shared tokens live in `src/styles/system-tokens.css`. Use semantic colors such as `bg-card`, `text-muted-foreground`, and `border-border`.

The dark palette uses a black canvas, #0a0a0a surfaces, #262626 borders, #ededed foreground, and #a1a1a1 supporting text. Light counterparts are defined in the same file.

Use Geist Sans for interface text and Geist Mono for code and numeric data. Use a 4px spacing base, 8px control radii, and 12px panel radii. Reserve color for meaningful states and data. Keep keyboard focus visible and respect reduced-motion preferences.

## Component references

- [shadcn/ui](https://ui.shadcn.com): primary source for core UI components. By shadcn and Vercel.
- [coss ui](https://coss.com/ui): additional Base UI primitives. By coss.com.
- [blocks.so](https://blocks.so): composed React, Tailwind, and shadcn/ui interfaces. By Ephraim Duncan.
- [mapcn](https://www.mapcn.dev): React map components using MapLibre and Tailwind. Source by AnmolSaini16 and contributors.

`src/components/ui/` contains local primitives. Inspect their actual APIs before using them; Base UI and Radix conventions differ.

Existing source galleries remain in `src/components/projects/` as development references. They are not separate systems in the main navigation.
