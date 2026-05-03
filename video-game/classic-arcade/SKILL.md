---
name: classic-arcade-design
description: Generate UIs in the Classic Arcade style — coin-op CRT cabinet aesthetic with Press Start 2P pixel display, Inter body, magenta primary + cyan/yellow/red/green neon palette, heavy scanlines, marquee glow. First sibling in the Arcade design category.
user-invocable: true
---

Read `README.md` for voice + visual DNA. Tokens in `tokens.css` (prefix `--ar-*`), semantic styles in `colors_and_type.css`. 16 visual specimens in `preview/`.

## Core rules

- **Cabinet black bg** `#0a0410` (magenta-tinted). Never pure black.
- **Two type families.** Press Start 2P for display/HUD; Inter for body. Mixing is the point.
- **Magenta = primary.** Cyan = signal. Yellow = energy. Red = alarm. Green = 1UP.
- **Square corners. 4px pixel borders.** No radius except round dots.
- **Stepped animation only.** `steps(4, end)`, never cubic-bezier on chrome.
- **Heavy scanlines + bezel vignette** for hero moments. This is strict period, not modern homage.
- **ALL CAPS for pixel display.** Lowercase only in body sans.

## When invoked

Copy `tokens.css` + `colors_and_type.css` into the output directory and link them. Use `--ar-*` CSS variables only.
