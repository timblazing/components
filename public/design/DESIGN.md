---
version: alpha
name: blasingame.dev
description: A monochrome workshop. Near-black canvas, hairline rules, tight geometric type.
colors:
  background: "#0a0a0a"
  foreground: "#fafafa"
  card: "#171717"
  primary: "#e5e5e5"
  primary-foreground: "#171717"
  muted: "#262626"
  accent: "#262626"
  border: "rgb(255 255 255 / 0.1)"
  border-strong: "rgb(255 255 255 / 0.18)"
  input: "rgb(255 255 255 / 0.15)"
  muted-foreground: "#a1a1a1"
  success: "#4ade80"
  warning: "#fbbf24"
  destructive: "#f87171"
  info: "#60a5fa"
  background-light: "#ffffff"
  foreground-light: "#0a0a0a"
  card-light: "#ffffff"
  primary-light: "#171717"
  primary-foreground-light: "#fafafa"
  muted-light: "#f5f5f5"
  accent-light: "#f5f5f5"
  border-light: "#e5e5e5"
  border-strong-light: "#d4d4d4"
  input-light: "#e5e5e5"
  muted-foreground-light: "#737373"
  success-light: "#16a34a"
  warning-light: "#d97706"
  destructive-light: "#dc2626"
  info-light: "#2563eb"
typography:
  display:
    fontFamily: DM Sans
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.05em
  heading:
    fontFamily: SF Pro
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.04em
  lead:
    fontFamily: SF Pro
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.025em
  title:
    fontFamily: SF Pro
    fontSize: 20px
    fontWeight: 500
    letterSpacing: -0.015em
  body:
    fontFamily: SF Pro
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: SF Pro
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: SF Pro
    fontSize: 12px
    fontWeight: 400
  mono:
    fontFamily: Menlo
    fontSize: 13px
    fontWeight: 400
    fontFeature: '"tnum"'
rounded:
  control: 8px
  panel: 12px
  feature: 16px
  pill: 999px
spacing:
  "4": 4px
  "8": 8px
  "12": 12px
  "16": 16px
  "24": 24px
  "32": 32px
  "48": 48px
  "64": 64px
  "96": 96px
  container: 1288px
  content: 1240px
  gutter: 24px
  gutter-phone: 16px
  header: 60px
  section: 96px
  section-phone: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.pill}"
    height: 40px
  button-ghost:
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    height: 40px
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.panel}"
  tabs:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.control}"
  header:
    backgroundColor: "{colors.background}"
    height: 60px
---

# blasingame.dev

## Overview

A monochrome workshop: near-black canvas, hairline rules, tight geometric type. Light and dark follow the system preference; there is no toggle. Pages are stacks of full-bleed sections separated by edge-to-edge rules, with content held to a 1240px column.

## Colors

shadcn/ui neutral. Source of truth: `src/styles/system-tokens.css`.

| Name | Token | Dark | Light |
|------|-------|------|-------|
| Canvas | `--background` | `#0a0a0a` | `#ffffff` |
| Foreground | `--foreground` | `#fafafa` | `#0a0a0a` |
| Surface | `--card` | `#171717` | `#ffffff` |
| Primary | `--primary` | `#e5e5e5` | `#171717` |
| Subtle | `--muted` | `#262626` | `#f5f5f5` |
| Accent | `--accent` | `#262626` | `#f5f5f5` |
| Border | `--border` | `rgb(255 255 255 / 10%)` | `#e5e5e5` |
| Border strong | `--border-strong` | `rgb(255 255 255 / 18%)` | `#d4d4d4` |
| Input | `--input` | `rgb(255 255 255 / 15%)` | `#e5e5e5` |
| Secondary text | `--muted-foreground` | `#a1a1a1` | `#737373` |
| Success | `--success` | `#4ade80` | `#16a34a` |
| Warning | `--warning` | `#fbbf24` | `#d97706` |
| Error | `--destructive` | `#f87171` | `#dc2626` |
| Information | `--info` | `#60a5fa` | `#2563eb` |

## Typography

- **DM Sans** (`--font-display`): display only, weight 500.
- **SF Pro** (`--font-sans`): everything else. `"SF Pro Text", "SF Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`.
- **Menlo** (`--font-mono`): code, tokens, measurements. Tabular numbers.

| Role | Size | Weight | Line height | Tracking |
|------|------|--------|-------------|----------|
| Display | 48–72px | 500 | 1.0 | −0.05em |
| Heading | 36px (30 on phones) | 500 | 1.1 | −0.04em |
| Lead | 26px (20 on phones) | 500 | 1.25 | −0.025em |
| Title | 20px | 500 | — | −0.015em |
| Body | 16px (14px in panels) | 400 | 1.625 | — |
| Caption | 12px | 400 | — | — |
| Mono | 13px | 400 | — | — |

## Layout

4px base. Scale 4, 8, 12, 16, 24, 32, 48, 64, 96.

- Control padding: 8–12px
- Panel padding: 16–32px
- Section spacing: 96px (72px on phones)
- Container: 1288px max, 1240px content
- Gutter: 24px (16px on phones)
- Header: 60px. Footer: 20px vertical padding.

## Elevation & Depth

No shadows. Depth is Canvas → Surface → Subtle (`--background` → `--card` → `--muted`) plus 1px `--border` hairlines. The masked dot field is the only decoration.

## Shapes

| Name | Radius | Token | Use |
|------|--------|-------|-----|
| Control | 8px | `rounded-lg` | Buttons, nav links, tabs, inputs |
| Panel | 12px | `rounded-xl` | Cards, dialogs |
| Feature | 16px | `rounded-2xl` | Showcase surfaces |
| Pill | 999px | `rounded-full` | Hero and CTA buttons, badges, avatars, switches, status dots |

## Motion

| Use | Duration |
|-----|----------|
| Hover and focus color | 150ms |
| Icon turns, small state changes | 200ms |
| Disclosure height and opacity | 250ms |
| `prefers-reduced-motion` | Instant |

## Components

shadcn/ui (Base UI variant, `https://ui.shadcn.com/r/styles/base-nova/<name>.json`) first. Local primitives live in `src/components/ui/`; site components in `src/components/design-system/`; styles in `src/styles/design-system.css`.

- **Header** (`<DesignSystemShell>`): sticky, 60px, wordmark only. Page links, a vertical separator, GitHub. Below 640px a Menu button opens the links in a left `Sheet`. Bottom rule and frosted background only after scroll.
- **Page header** (`<PageHeader>`): display title, 18px muted description, masked dot field. One per page.
- **Section** (`<Section>`): heading in 0.7fr, content in 1.3fr (`stacked` for wide content), edge-to-edge rule between sections. Stacks below 768px.
- **Lead** (`<Lead strong="…">`): strong sentence in foreground, the rest muted.
- **Buttons**: `.ds-button` (40px, pill, optional `<kbd>`) and `.ds-button.is-ghost`.
- **Link** (`<TextLink>`): underline in `--border-strong`, arrow nudges up-right on hover.
- **Tabs** (`<Tabs>`): 8px track on `--muted`. On phones, swap for a `Select` when they don't fit.
- **Disclosure** (`<details className="ds-disclosure">`): plus turns 45° when open.
- **Footer** (`<DesignSystemShell>`): 20px vertical padding, edge-to-edge top rule, wordmark left, GitHub and page links right.

Libraries: [shadcn/ui](https://ui.shadcn.com), [Base UI](https://base-ui.com), [coss ui](https://coss.com/ui), [blocks.so](https://blocks.so), [mapcn](https://www.mapcn.dev).

## Do's and Don'ts

- Do use semantic tokens so both themes work.
- Do reserve color for status: success, warning, error, information.
- Do use pills for hero and CTA buttons, badges, avatars, and switches; 8px for nav links, tabs, and controls inside panels.
- Do keep display type at weight 500 with tight tracking.
- Don't use shadows or gradients.
- Don't put a logo next to the wordmark.
- Don't draw a header border at the top of the page.
- Don't hand-roll tabs, buttons, or toggles that exist in `src/components/ui/`.

## Pages

- `/`: header, full-viewport hero, footer.
- `/foundations`: this file, rendered.
- `/components`: library references and attribution.
- `/blocks`: composed layouts with preview, viewport sizes, and source.
- `/fillrate`, `/sportscal`, `/sleeper-fantasy-dashboard`: per-project galleries in `src/components/projects/`.

## Files

Published at `/design/`: `DESIGN.md`, `theme.css` (Tailwind v4 `@theme`), `variables.css`, `tokens.json`. Edit `docs/design/` and `src/styles/system-tokens.css`; `bun run reference:sync` regenerates the public copies.
