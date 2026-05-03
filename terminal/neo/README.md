# Neo Terminal

A phosphor-green, editorial-hacker design system. The third sibling to Neon Terminal and Static Terminal — pure black, strict monochrome green, no digital rain, no scanlines. Just green typography, chromatic phosphor ghosts, and binary as ornamental texture. Reads like the source code of an operating system that doesn't want you reading it.

This package is the production-ready React implementation: Vite + TypeScript + Tailwind v4 + shadcn/ui + react-router. Drop the tokens into any Tailwind project and the language is yours.

## What it's for

- Developer tools that earn the hacker aesthetic without leaning into clichés
- Security / pentest / CTF tooling
- AI-agent and CLI surfaces
- Anywhere you want "1999 hacker film" gravitas without katakana rain

## Visual DNA

- **Pure black, not soft black.** Default `#000000`. The token is named `bg-paper` for parallelism, but it is in fact black.
- **Phosphor green is the only color.** Pure `#00ff41` for primary. Every accent is a luminance step of the same hue — strict monochrome, like Static.
- **Green ladder, not hue ladder.** Bright (`#00ff41`) → mid (`#4cff7a`) → soft (`#128c2c`) → shadow (`#0a3812`).
- **Chromatic aberration goes green-on-deep-green.** Bright-green + dark-green offset shadows on display type — type still _shimmers_, but in one hue.
- **CRT bloom only.** Halos are heavy phosphor glow (12+24+48px stack). No scanlines, no vignette overlay in standard frames.
- **Binary as grain.** A subtle phosphor-tinted SVG noise overlay replaces both Neon's color glow and Static's gray grain.
- **No red, no amber, no warning hue.** Errors are the same green; severity is conveyed by glow weight and bracket prefix (`[!!]` vs `[ok]`).
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

Every token from the original Matrix Terminal CSS lives in `src/index.css` under Tailwind's `@theme` block. They are consumable as utilities — no need to reach for arbitrary values:

```tsx
<div className="bg-paper text-ink font-sans">
  <h1 className="text-bright text-glow-bright tracking-tight">
    Wake <em className="text-hero-em italic">up</em>.
  </h1>
</div>
```

### Color tokens

| Surfaces        | Ink             | Accents (phosphor ladder) |
| --------------- | --------------- | ------------------------- |
| `bg-paper`      | `text-ink`      | `text-bright` (#00ff41)   |
| `bg-paper-dim`  | `text-ink-soft` | `text-bright-deep`        |
| `bg-term`       | `text-mute`     | `text-mid`                |
| `bg-term-paper` | `text-rule`     | `text-soft`               |
|                 |                 | `text-shadow`             |
|                 |                 | `text-warn`, `text-error` |

### Effect utilities

Multi-value effects (gradients, multi-shadow, dataurl backgrounds) are exposed via `@utility` blocks:

| Utility               | What it does                                          |
| --------------------- | ----------------------------------------------------- |
| `mx-binary-grain`     | Phosphor-tinted SVG noise overlay (60% opacity)       |
| `mx-vignette`         | Radial fade-to-black at edges (heavier than siblings) |
| `shadow-glow-bright`  | Phosphor halo at 12+24+48px (3-stack bloom)           |
| `shadow-glow-mid`     | Mid-green halo                                        |
| `shadow-glow-soft`    | Deep-green halo                                       |
| `shadow-dot-glow`     | Soft 6px halo for chrome dots                         |
| `shadow-term-bloom`   | Outer phosphor halo for terminal containers          |
| `shadow-quote-bleed`  | Inset 3px-edge phosphor bleed for quote cards         |
| `text-glow-bright`    | Phosphor text-shadow halo (10+20px)                   |
| `text-chroma`         | 3px phosphor + deep-green ghost chromatic aberration  |
| `text-chroma-heavy`   | 4px phosphor + deep-green ghost                       |
| `text-hero-em`        | Phosphor + halo + heavy chromatic — hero italics      |
| `text-display-em`     | Phosphor + halo + medium chromatic — display          |
| `text-logotype-em`    | Phosphor + halo + light chromatic — logotype          |

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

### Animations

```tsx
<span className="animate-blink">|</span>      {/* signature 1s blink */}
<span className="animate-flicker">awake</span> {/* occasional CRT flicker on display type */}
```

## Components

All components live in `src/components/`.

### Terminal primitives (`components/terminal/`)

- `<ChromeBar title=... />` — three phosphor-green dots at descending opacity (1.0 / 0.55 / 0.25), each carries a halo
- `<Cursor />` — blinking phosphor block, matches `.mx-cursor` from the source
- `<Kicker tone="bright|mid">` — uppercase mono accent text with phosphor halo
- `<PromptLine>` — `$` prefix + content + cursor
- `<SectionHead number title meta>` — numbered section divider
- `<Manifest entries={[{key, value}]} />` — terminal file-listing block
- `<BgWash variant="page|hero|small">` — multi-stop radial green wash
- `<PreviewFrame title>` — wraps a preview route with back-navigation

### shadcn primitives (`components/ui/`)

Themed to Neo Terminal — square corners, mono labels, phosphor halos.

- `<Button variant="primary|secondary|ghost|terminal">` — terminal variant prepends `$ `
- `<Card>` + `<CardKicker>` `<CardTitle>` `<CardDescription>` — paper-dim surface, hairline border
- `<Input />` — term-bg, phosphor focus ring
- `<Badge variant="bright|mid|soft|warn|mute">` — outlined capsules across the phosphor ladder

## Routes

The home page (`/`) is the design system showcase. Each tile links to one preview:

```
/colors/surfaces       /type/display          /effects/glow
/colors/ink            /type/scale            /effects/scanlines (binary-grain)
/colors/accents        /type/mono
                       /spacing/scale

/components/buttons    /components/cards      /components/badges
/components/inputs     /components/terminal

/brand/logotype        /brand/hero
```

> The `/effects/scanlines` route name is preserved for parallelism with the sibling systems, but renders the binary-grain layer instead — Neo Terminal does not use scanlines.

## Voice

Direct, opinionated, second person. Slightly more cryptic, slightly more 1999.

- ✅ "wake up."
- ✅ "follow the white rabbit."
- ✅ "the system is the message."
- ❌ "Welcome to our Matrix-themed design system!"

**Casing.** Sentence case for titles. ALL CAPS only for mono kickers. Lowercase for terminal prompts.

**Numbers.** Always padded with leading zeros (`01`, `02`, `03`).

**Iconography.** Three phosphor-green dots at descending opacities for chrome — same parallel as Static. `$`, `>`, `→`, `[ok]`, `[!!]`, `01/02/03` carry the symbolic load. Binary digits (`01101000`) used as ornamental rules and dividers.

## File map

```
neo-terminal-tailwind/
├── src/
│   ├── index.css              # Tailwind @theme + base + @utility blocks
│   ├── main.tsx               # Router root
│   ├── router.tsx             # Route table
│   ├── App.tsx                # Home — the design system showcase
│   ├── lib/utils.ts           # cn() helper for shadcn
│   ├── components/
│   │   ├── ui/                # shadcn primitives
│   │   └── terminal/          # Neo Terminal primitives
│   └── pages/                 # 16 preview routes
├── components.json            # shadcn config
├── vite.config.ts             # Tailwind v4 + @ alias
└── README.md
```

## Status

v.1999 · _the system is the message._
