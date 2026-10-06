# components

My personal development reference and public showcase for the design system used in my projects.

## Pages

- `/`: Foundations — color, typography, spacing, shape, motion, and page patterns.
- `/components`: references and attribution for shadcn/ui, coss ui, blocks.so, and mapcn.
- `/blocks`: composed interfaces from my projects.

Appearance follows the user's system preference. There is no theme switch or manual appearance setting.

## Foundations

Shared tokens live in `src/styles/system-tokens.css`. Use semantic colors such as `bg-card`, `text-muted-foreground`, and `border-border`. Keep literal colors out of markup; the exception is a brand color that identifies something, like a team.

The dark palette uses a black canvas, #0a0a0a surfaces, #262626 borders (#3a3a3a strong), #ededed foreground, and #a1a1a1 supporting text. Light counterparts are defined in the same file.

- **Type:** Geist Sans for everything, Geist Mono for code, tokens, and tabular numbers. Display 48–72px / 600 / −0.06em / 0.95 leading. Heading 36px / 500 / −0.025em. Lead 26px / 500. Title 20px / 500. Body 16px (14px inside panels) / 1.6, muted. Caption 12px, muted at 70%.
- **Spacing:** 4px base. 8–12px inside controls, 16–32px inside panels, 96–128px between sections with one border rule. 1280px max width, 24px gutters (16px on phones).
- **Shape:** 8px controls, 12px panels, 16px showcase surfaces, pills for primary actions, search, and icon buttons. Elevation comes from surface and a strong border, not shadows.
- **Motion:** 150ms hover/focus, 200ms icon turns, 250ms disclosure. Honor reduced motion; nothing moves on its own.

## Patterns

The page language comes from the SportsCal landing page (https://sportscal.site). Components live in `src/components/design-system/`; styles in `src/styles/design-system.css`.

- **Header:** sticky, 56px, borderless at the top and frosted (`background/80` + blur) once scrolled. Logo mark and wordmark left; quiet pill links and a round GitHub icon right.
- **Page header** (`<PageHeader>`): display title (48–72px / 600 / −0.06em) and 18px muted description over a masked dot field. One per page.
- **Section** (`<Section>`): heading in a 0.7fr column, content in 1.3fr. Use `stacked` for wide content like previews.
- **Lead** (`<Lead strong="…">`): one strong sentence in foreground, the rest in muted, followed by 14px body text.
- **Actions:** `.ds-pill` (primary, 44px tall, optional `<kbd>`) and `.ds-pill.is-ghost`. Inline links use `<TextLink>`: underline in the strong border color, arrow nudges up-right on hover.
- **Disclosure:** native `<details className="ds-disclosure">` with a plus that turns 45° when open.
- **Footer:** wordmark and one-line description, outlined round GitHub button.

## Component references

- [shadcn/ui](https://ui.shadcn.com): primary source for core UI components. By shadcn and Vercel.
- [coss ui](https://coss.com/ui): additional Base UI primitives. By coss.com.
- [blocks.so](https://blocks.so): composed React, Tailwind, and shadcn/ui interfaces. By Ephraim Duncan.
- [mapcn](https://www.mapcn.dev): React map components using MapLibre and Tailwind. Source by AnmolSaini16 and contributors.

`src/components/ui/` contains local primitives. Inspect their actual APIs before using them; Base UI and Radix conventions differ.

Existing source galleries remain in `src/components/projects/` as development references. They are not separate systems in the main navigation.
