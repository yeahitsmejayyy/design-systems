# Static Terminal

A grayscale, editorial, security-tool-grade design system. The achromatic counterpart to Neon Terminal — every accent collapsed to luminance. No hue, no neon. Just contrast, chromatic gray-ghosts, scanlines, and grain.

This package is the production-ready React implementation: Vite + TypeScript + Tailwind v4 + shadcn/ui + react-router. Drop the tokens into any Tailwind project and the language is yours.

## What it's for

- Tools where "loud" reads as untrustworthy — security, infra, compliance, ops
- Editorial / long-read surfaces that want gravitas
- Print-friendly product pages
- B&W documentary and archival aesthetics
- Anywhere Neon Terminal would feel _too_ neon

## Visual DNA

- **Soft black, not pure black.** Default `#15151a`. Pure `#000` reserved for full-bleed terminal moments.
- **White is the only "color".** `#ffffff` carries primary emphasis the way magenta did in Neon Terminal — kickers, focus rings, cursors.
- **Luminance ladder, not hue.** Mid-gray (`#9a9aa2`), soft gray (`#5a5a62`), shadow gray (`#2f2f36`) replace cyan/lime/violet. Brightness is the only signal.
- **Chromatic aberration in grayscale.** 3–4px offset shadows in light + dark gray. Type still _shimmers_, but in B&W.
- **Grain replaces glow.** A subtle SVG noise overlay fills the void left by missing color.
- **CRT scanlines + vignette** — unchanged from Neon Terminal. They read perfectly in grayscale.
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

Every token from the original Static Terminal CSS lives in `src/index.css` under Tailwind's `@theme` block. They are consumable as utilities — no need to reach for arbitrary values:

```tsx
<div className="bg-paper text-ink font-sans">
  <h1 className="text-bright text-glow-bright tracking-tight">
    Stay <em className="text-hero-em italic">still</em>.
  </h1>
</div>
```

### Color tokens

| Surfaces      | Ink         | Accents (luminance ladder) |
| ------------- | ----------- | -------------------------- |
| `bg-paper`    | `text-ink`  | `text-bright` (white)      |
| `bg-paper-dim`| `text-ink-soft` | `text-bright-deep`     |
| `bg-term`     | `text-mute` | `text-mid`                 |
| `bg-term-paper` | `text-rule` | `text-soft`              |
|               |             | `text-shadow`              |
|               |             | `text-warn`, `text-error`  |

### Effect utilities

Multi-value effects (gradients, multi-shadow, dataurl backgrounds) are exposed via `@utility` blocks:

| Utility             | What it does                              |
| ------------------- | ----------------------------------------- |
| `st-grain`          | SVG noise overlay (50% opacity, overlay)  |
| `st-scanlines`      | 1px CRT lines repeating-linear-gradient   |
| `st-vignette`       | Radial fade-to-black at edges             |
| `shadow-glow-bright`| White halo at 12+24px                     |
| `shadow-glow-mid`   | Light-gray halo                           |
| `text-glow-bright`  | White text-shadow halo                    |
| `text-chroma`       | 3px gray-ghost chromatic aberration       |
| `text-chroma-heavy` | 4px gray-ghost chromatic aberration       |
| `text-hero-em`      | Halo + heavy chromatic — for hero italics |
| `text-display-em`   | Halo + medium chromatic — for display     |
| `text-logotype-em`  | Halo + light chromatic — for logotype     |

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

- `<ChromeBar title=... />` — three white dots at descending opacity + window title
- `<Cursor />` — blinking white block, matches `.st-cursor` from the source
- `<Kicker tone="bright|mid">` — uppercase mono accent text with halo
- `<PromptLine>` — `$` prefix + content + cursor
- `<SectionHead number title meta>` — numbered section divider
- `<Manifest entries={[{key, value}]} />` — terminal file-listing block
- `<BgWash variant="page|hero|small">` — radial gradient backdrop
- `<PreviewFrame title>` — wraps a preview route with back-navigation

### shadcn primitives (`components/ui/`)

Themed to Static Terminal — square corners, mono labels, white halos.

- `<Button variant="primary|secondary|ghost|terminal">` — terminal variant prepends `$ `
- `<Card>` + `<CardKicker>` `<CardTitle>` `<CardDescription>` — paper-dim surface, hairline border
- `<Input />` — term-bg, white focus ring
- `<Badge variant="bright|mid|soft|warn|mute">` — outlined capsules across the luminance ladder

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

Direct, opinionated, second person. Slightly drier than Neon Terminal — the grayscale aesthetic is itself a tonal lever; the words can lean editorial.

- ✅ "the signal is the silence."
- ✅ "static — pre-render, post-noise, fully formed."
- ❌ "Welcome to our amazing grayscale design system!"

**Casing.** Sentence case for titles. ALL CAPS only for mono kickers. Lowercase for terminal prompts.

**Numbers.** Always padded with leading zeros (`01`, `02`, `03`).

**Iconography.** Sparse. Three identical white dots at descending opacities (1.0 / 0.55 / 0.25) instead of red/yellow/green. `$`, `>`, `→` glyphs and `01/02/03` mono tags carry the symbolic load.

## File map

```
static-terminal-tailwind/
├── src/
│   ├── index.css              # Tailwind @theme + base + @utility blocks
│   ├── main.tsx               # Router root
│   ├── router.tsx             # Route table
│   ├── App.tsx                # Home — the design system showcase
│   ├── lib/utils.ts           # cn() helper for shadcn
│   ├── components/
│   │   ├── ui/                # shadcn primitives
│   │   └── terminal/          # Static Terminal primitives
│   └── pages/                 # 16 preview routes
├── components.json            # shadcn config
├── vite.config.ts             # Tailwind v4 + @ alias
└── README.md
```

## Status

v.2026 · _the signal is the silence._
