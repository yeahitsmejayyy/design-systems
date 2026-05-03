# Cyber Terminal

A neon-noir, midnight-blue, electric-cyan design system. The fourth sibling alongside Neon, Static, and Neo Terminal. Wet-street atmospheric haze, chromatic split, CRT scanlines, and a single hot magenta-pink accent that lands like a chili. Reads like a back-alley terminal in a rain-slick neon district.

This package is the production-ready React implementation: Vite + TypeScript + Tailwind v4 + shadcn/ui + react-router. Drop the tokens into any Tailwind project and the language is yours.

## What it's for

- Cyberpunk / neon-noir product surfaces
- Gaming, streaming, esports tooling that needs more atmosphere than utility
- Late-night dev tools, pentest suites with vibe
- Anywhere "city at night, signs reflecting off pavement" is the right mood

## Visual DNA

- **Midnight-blue paper, not black.** Default `#060c1a`. Pure black reserved for `bg-term`.
- **Electric cyan is the primary.** `#00e7ff` carries every emphasis the way magenta did in Neon, white did in Static, and phosphor did in Neo.
- **Hot magenta-pink (`#ff2d8f`) is the rare hot accent.** Use it like a chili — italic emphasis, error states, _exactly one_ thing per screen. Never for body text, never for default state.
- **Two-color chromatic.** Display-type aberration is cyan-on-pink — the neon-sign DNA. The most chromatic of the four siblings.
- **Atmospheric haze.** Soft cyan + pink radial washes underneath everything to evoke wet-street neon reflection.
- **Heavy bloom.** Halos are larger and more layered than Neon Terminal. The signs are wet, the lights are hot.
- **Scanlines + grain + vignette** all in. The most loaded of the four.
- **Inter for voice, JetBrains Mono for signal.**
- **Square corners. Sentence case. No emoji.**

## The hot-pink rule

Cyber Terminal has _two_ accents but they are not equals:

- **Cyan = signal.** Cursors, links, primary buttons, kickers, prompts, focus rings. Everywhere.
- **Pink = heat.** Italic emphasis, errors, the lone notification dot, hover on a destructive action, the brand mark's accent, the one neon sign in the alley. **Once per surface, ideally.**

When in doubt, use cyan. The pink is what makes it _feel_ cyberpunk, not what it _is_.

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

Every token from the original Cyber Terminal CSS lives in `src/index.css` under Tailwind's `@theme` block. They are consumable as utilities — no need to reach for arbitrary values:

```tsx
<div className="bg-paper text-ink font-sans">
  <h1 className="text-bright text-glow-bright tracking-tight">
    Wet streets. <em className="text-hero-em italic">Live</em> shells.
  </h1>
</div>
```

### Color tokens

| Surfaces        | Ink             | Cyan ladder            | Hot ladder         |
| --------------- | --------------- | ---------------------- | ------------------ |
| `bg-paper`      | `text-ink`      | `text-bright` (#00e7ff)| `text-hot` (#ff2d8f) |
| `bg-paper-dim`  | `text-ink-soft` | `text-bright-deep`     | `text-hot-deep`    |
| `bg-term`       | `text-mute`     | `text-mid`             | `text-hot-soft`    |
| `bg-term-paper` | `text-rule`     | `text-soft`            |                    |
|                 |                 | `text-shadow`          |                    |

### Effect utilities

Multi-value effects (gradients, multi-shadow, dataurl backgrounds) are exposed via `@utility` blocks:

| Utility               | What it does                                       |
| --------------------- | -------------------------------------------------- |
| `cy-haze`             | Soft cyan + pink radial wash (wet-street fog)      |
| `cy-grain`            | Cyan-tinted SVG noise overlay (50% opacity)        |
| `cy-scanlines`        | 1px CRT lines tinted cyan                          |
| `cy-vignette`         | Heavy radial fade-to-midnight at edges             |
| `shadow-glow-bright`  | Cyan halo at 12+24+48px (3-stack bloom)            |
| `shadow-glow-mid`     | Mid-cyan halo                                      |
| `shadow-glow-soft`    | Deep-cyan halo                                     |
| `shadow-glow-hot`     | Hot-pink halo — rare                               |
| `shadow-dot-glow`     | Soft 6px halo for chrome dots                      |
| `shadow-term-bloom`   | Outer cyan halo for terminal containers            |
| `shadow-quote-bleed`  | Inset 3px-edge cyan bleed for quote cards          |
| `text-glow-bright`    | Cyan text-shadow halo                              |
| `text-glow-hot`       | Hot-pink text-shadow halo                          |
| `text-chroma`         | 3px cyan + hot-pink ghost split                    |
| `text-chroma-heavy`   | 4px cyan + hot-pink ghost split                    |
| `text-hero-em`        | Cyan + halo + heavy chromatic — hero italics       |
| `text-display-em`     | Cyan + halo + chromatic — display                  |
| `text-logotype-em`    | Pink-led + cyan/pink ghosts — logotype             |

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
<span className="animate-flicker">live</span> {/* occasional CRT flicker */}
```

## Components

All components live in `src/components/`.

### Terminal primitives (`components/terminal/`)

- `<ChromeBar title=... />` — three glowing cyan dots at descending opacity (1.0 / 0.55 / 0.25)
- `<Cursor />` — blinking cyan block
- `<Kicker tone="bright|mid|hot">` — uppercase mono accent text. `hot` is the rare pink — once per surface, max
- `<PromptLine>` — `$` prefix + content + cursor
- `<SectionHead number title meta>` — numbered section divider
- `<Manifest entries={[{key, value}]} />` — terminal file-listing block
- `<BgWash variant="page|hero|small">` — cyan + pink + midnight radial wash
- `<PreviewFrame title>` — wraps a preview route with back-navigation

### shadcn primitives (`components/ui/`)

Themed to Cyber Terminal — square corners, mono labels, neon halos. Cyber adds a 5th button variant (`hot`) for the rare destructive CTA.

- `<Button variant="primary|secondary|ghost|hot|terminal">` — `hot` is the lone destructive (drop session, log out, kill); `terminal` prepends `$ `
- `<Card>` + `<CardKicker>` `<CardTitle>` `<CardDescription>` — paper-dim surface, hairline border
- `<Input error?: boolean />` — cyan focus ring by default, hot-pink ring on `error`
- `<Badge variant="bright|mid|soft|hot|mute">` — `hot` is the rare "breached" state

## Routes

The home page (`/`) is the design system showcase. Each tile links to one preview:

```
/colors/surfaces       /type/display          /effects/glow
/colors/ink            /type/scale            /effects/scanlines (atmosphere)
/colors/accents        /type/mono
                       /spacing/scale

/components/buttons    /components/cards      /components/badges
/components/inputs     /components/terminal

/brand/logotype        /brand/hero
```

> The `/effects/scanlines` route preserves the parallel name from sibling systems but renders the full atmospheric stack — haze, grain, scanlines, and vignette together.

## Voice

Direct, opinionated, second person. More noir-poetic than the others — short sentences, fragments, one-liners.

- ✅ "the city never sleeps. neither does the system."
- ✅ "wet streets. dry humor. live shell."
- ✅ "log in. ghost out."
- ❌ "Welcome to our cyberpunk-themed design system!"

**Casing.** Sentence case for titles. ALL CAPS only for mono kickers. Lowercase for terminal prompts.

**Numbers.** Always padded with leading zeros (`01`, `02`, `03`).

**Iconography.** Three glowing cyan dots at descending opacities. `$`, `>`, `→`, `[ok]`, `[!!]`, `01/02/03` carry the symbolic load. The lone hot-pink dot or kicker is the spice — use it once per screen, not per section.

## File map

```
cyber-terminal-tailwind/
├── src/
│   ├── index.css              # Tailwind @theme + base + @utility blocks
│   ├── main.tsx               # Router root
│   ├── router.tsx             # Route table
│   ├── App.tsx                # Home — the design system showcase
│   ├── lib/utils.ts           # cn() helper for shadcn
│   ├── components/
│   │   ├── ui/                # shadcn primitives
│   │   └── terminal/          # Cyber Terminal primitives
│   └── pages/                 # 16 preview routes
├── components.json            # shadcn config
├── vite.config.ts             # Tailwind v4 + @ alias
└── README.md
```

## Status

v.2049 · _the city is a terminal. log in._
