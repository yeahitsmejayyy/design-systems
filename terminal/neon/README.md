# Neon Terminal

A magenta-first, CRT-textured, mono-ornamented design system. Built for developer tools, agent interfaces, founder memos, and any surface that should feel simultaneously technical and alive — late-night IDE meets neon-soaked arcade.

This package is the production-ready React implementation: Vite + TypeScript + Tailwind v4 + shadcn/ui + react-router. Drop the tokens into any Tailwind project and the language is yours.

## What it's for

- Developer-tool interfaces, terminals, dashboards
- Agent / coding-tool / builder-tool product surfaces
- Dense technical decks that should still feel cinematic
- Founder memos and product docs that want to read as **"considered, not corporate"**

## Visual DNA

- **Deep plum paper, not black.** Default `#1a0a1f`. True black (`#0a0614`) is reserved for full-bleed terminal moments.
- **Magenta-first, blue-absent.** Primary accent is hot magenta (`#ff2d78`). Cyan (`#22e4ff`) and acid lime (`#a8ff3e`) are secondary. Blue is deliberately missing.
- **Chromatic aberration on big type.** 3–4px cyan + lime offset shadows on display type — the CRT misalignment look.
- **CRT scanlines + radial vignette** as atmospheric overlays on hero frames.
- **Terminal chrome as decoration.** Magenta · amber · lime traffic lights, `$ command` prompts, and mono labels show up as ornament.
- **Inter for voice, JetBrains Mono for signal.**
- **Square corners. Sentence case. No emoji.**

## Stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Build       | Vite 8                                |
| Framework   | React 19 + TypeScript 6               |
| Styling     | Tailwind v4 (CSS-first, `@theme`)     |
| Components  | shadcn/ui (default) + custom terminal |
| Routing     | react-router 7                        |
| Package mgr | Bun                                   |

## Quick start

```bash
bun install
bun dev      # dev server
bun run build # production build
```

Dev server runs at `http://localhost:5173`. The home route at `/` is the design system showcase; each tile links to a preview route specifying one slice (colors, type, spacing, effects, components, brand).

## Token system

Every token from the original Neon Terminal CSS lives in `src/index.css` under Tailwind's `@theme` block. They are consumable as utilities — no need to reach for arbitrary values:

```tsx
<div className="bg-paper text-ink font-sans">
  <h1 className="text-magenta text-glow-magenta tracking-tight">
    Build in the <em className="text-hero-em italic">open</em>.
  </h1>
</div>
```

### Color tokens

| Surfaces        | Ink             | Accents                 |
| --------------- | --------------- | ----------------------- |
| `bg-paper`      | `text-ink`      | `text-magenta` (primary)|
| `bg-paper-dim`  | `text-ink-soft` | `text-magenta-deep`     |
| `bg-term`       | `text-mute`     | `text-cyan`             |
| `bg-term-paper` | `text-rule`     | `text-lime`             |
|                 |                 | `text-violet`           |
|                 |                 | `text-amber`            |
|                 |                 | `text-red`              |

### Effect utilities

Multi-value effects (gradients, multi-shadow) are exposed via `@utility` blocks:

| Utility               | What it does                                |
| --------------------- | ------------------------------------------- |
| `nt-scanlines`        | 1px CRT lines repeating-linear-gradient     |
| `nt-vignette`         | Radial fade-to-black at edges               |
| `shadow-glow-magenta` | Magenta halo at 12+24px                     |
| `shadow-glow-cyan`    | Cyan halo                                   |
| `shadow-glow-lime`    | Lime halo                                   |
| `text-glow-magenta`   | Magenta text-shadow halo                    |
| `text-glow-cyan`      | Cyan text-shadow halo                       |
| `text-glow-lime`      | Lime text-shadow halo                       |
| `text-chroma`         | 3px cyan + lime chromatic aberration        |
| `text-chroma-heavy`   | 4px cyan + lime chromatic aberration        |
| `text-hero-em`        | Magenta + halo + heavy chromatic — hero italics |
| `text-display-em`     | Magenta + halo + medium chromatic — display |
| `text-logotype-em`    | Magenta + halo + light chromatic — logotype |

### Type scale

Six display sizes plus a standard `xs → hero` ramp:

```tsx
<span className="text-display">132px</span>
<span className="text-title">72px</span>
<span className="text-subtitle">48px</span>
<span className="text-body">32px</span>
<span className="text-small">24px</span>
<span className="text-kicker">20px</span>
```

## Components

All components live in `src/components/`.

### Terminal primitives (`components/terminal/`)

- `<ChromeBar title=... />` — magenta · amber · lime traffic-light dots + window title
- `<Cursor />` — blinking lime block, matches `.nt-cursor` from the source
- `<Kicker tone="magenta|cyan|lime">` — uppercase mono accent text with halo
- `<PromptLine>` — `$` prefix + content + cursor
- `<SectionHead number title meta>` — numbered section divider
- `<Manifest entries={[{key, value}]} />` — terminal file-listing block
- `<BgWash variant="page|hero|small">` — magenta + cyan + violet radial wash
- `<PreviewFrame title>` — wraps a preview route with back-navigation

### shadcn primitives (`components/ui/`)

Themed to Neon Terminal — square corners, mono labels, neon halos.

- `<Button variant="primary|secondary|ghost|terminal">` — terminal variant prepends `$ `
- `<Card>` + `<CardKicker>` `<CardTitle>` `<CardDescription>` — paper-dim surface, hairline border
- `<Input />` — term-bg, magenta focus ring
- `<Badge variant="magenta|cyan|lime|amber|red|mute">` — outlined capsules across the neon palette

## Routes

The home page (`/`) is the design system showcase. Each tile links to one preview:

```
/colors/surfaces       /type/display          /effects/glow
/colors/ink            /type/scale            /effects/scanlines
/colors/accents        /type/mono
                       /spacing/scale

/components/buttons    /components/cards      /components/badges
/components/inputs     /components/terminal

/brand/logotype        /brand/hero
```

## Voice

Second person, direct, a little cocky. Writes like a senior engineer who respects your time. Never apologizes for being opinionated.

- ✅ "the ceiling moved. you should too."
- ✅ "You've used ChatGPT and thought _'this is useful but exhausting'_ — keep reading."
- ❌ "Welcome to our presentation about the future of AI coding tools."

**Casing.** Sentence case for titles. ALL CAPS only for mono kickers (`// IF`, `$ WELCOME`, `01 / 13`). Lowercase for terminal prompts.

**Numbers.** Always padded with leading zeros (`01`, `02`, `03`).

**Iconography.** Sparse. Magenta · amber · lime traffic-light dots, blinking cursor blocks, `$` / `>` / `→` glyphs, and mono tags carry the symbolic load. No decorative icon sets.

## File map

```
neon-terminal-tailwind/
├── src/
│   ├── index.css              # Tailwind @theme + base + @utility blocks
│   ├── main.tsx               # Router root
│   ├── router.tsx             # Route table
│   ├── App.tsx                # Home — the design system showcase
│   ├── lib/utils.ts           # cn() helper for shadcn
│   ├── components/
│   │   ├── ui/                # shadcn primitives
│   │   └── terminal/          # Neon Terminal primitives
│   └── pages/                 # 16 preview routes
├── components.json            # shadcn config
├── vite.config.ts             # Tailwind v4 + @ alias
└── README.md
```

## Status

v.2026 · _the ceiling moved. you should too._
