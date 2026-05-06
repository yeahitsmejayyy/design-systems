---
name: mario-design
description: Generate UIs in the Mario style — bright sky-blue overworld with red/pipe-green/coin-gold palette, Press Start 2P + Inter, 4px black sprite outlines, hard offset drop shadows, bouncy joyful tone. Daytime sibling in the Arcade category.
user-invocable: true
---

Read `README.md` for voice + visual DNA. Tokens in `tokens.css` (prefix `--m-*`), semantic styles in `colors_and_type.css`. 16 visual specimens in `preview/`.

## Core rules

- **Sky-blue background** `#5c94fc`. The only sibling that's NOT dark-mode-first. Bright by default.
- **Press Start 2P + Inter.** Pixel display with 2px black text-stroke; Inter body.
- **Red = primary.** Pipe green = secondary. Coin gold = reward. Fire orange = warning. Luigi green = success.
- **Sprite outlines mandatory.** 4px black borders on cards, buttons, inputs.
- **Hard offset shadows only.** `4px 4px 0 black`. Never soft drop shadows.
- **Square corners**, except pipes (8px) and coins (999px).
- **Bounce easing on hover.** `cubic-bezier(0.36, 0, 0.66, 1.5)` — the jump arc.
- **No scanlines.** Mario is a clean homage. The retro lives in type and outlines.
- **ALL CAPS on pixel.** Sentence case in body. Use exclamation points.

## When invoked

Copy `tokens.css` + `colors_and_type.css` into the output directory and link them. Use `--m-*` CSS variables only.
