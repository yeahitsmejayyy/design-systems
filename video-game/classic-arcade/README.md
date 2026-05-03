# Classic Arcade

The first sibling in the **Arcade** category. Coin-op CRT cabinet. Neon marquee glow. Scoreboards. _Insert coin to continue._

## What it's for

- Game launchers, leaderboards, retro gaming UI
- Hackathon / jam sites that need joyful energy
- Marketing surfaces for anything nostalgic + loud
- Anywhere "it's 1985, the cabinet is glowing, the room smells like ozone" is the right mood

## Visual DNA

- **Cabinet black background**, never pure black. Magenta-tinted near-black `#0a0410`.
- **Pixel display + clean sans body.** Press Start 2P for headlines and HUD chrome, Inter for body. Pixel everywhere is unreadable; this is the readable retro.
- **Five-color neon palette**: magenta (PRIMARY), cyan (signal), yellow (energy), red (alarm), green (1UP).
- **Heavy CRT scanlines + bezel vignette.** Strict period — looks like a real cabinet, not a clean homage.
- **Square corners, hard pixel borders.** 4px white/magenta/cyan borders on cards. No radius except dots.
- **Marquee glow on emphasis.** Display type pulses; cursor blinks; "PRESS START" flashes at 1.2s.
- **Steps()-eased animations.** No smooth easing on chrome — sprite-style stepped motion.

## Color rules

- **Magenta = primary.** Insert-coin pink. Used like the cyan in Cyber Terminal — primary buttons, links default, focus, the CTA.
- **Cyan = secondary signal.** High score, info, headings.
- **Yellow = energy + emphasis.** Press Start, combo counters, italic em, achievements.
- **Red = alarm only.** Game over, errors, destructive. Once per surface max.
- **Green = 1UP.** Success, extra life, ok. Quietly used.
- The five neons are equals in the palette but differ in role — magenta carries default, the others carry meaning.

## Content fundamentals

**Voice.** Loud, joyful, second person. Arcade copy is direct and a little corny.

- ✅ "PRESS START TO BEGIN"
- ✅ "Insert coin. Pick a fighter."
- ✅ "HIGH SCORE: 999,999"
- ❌ "Welcome to our retro-themed product."

**Casing.** ALL CAPS for pixel display. Sentence case for body. Pixel font is so tall lowercase doesn't render well — embrace caps.

**Iconography.** ▶ ◀ ▲ ▼ for direction. ★ ✦ for points. ♥ ♥ ♥ for lives. Pixel hearts, joystick glyphs, coin slots.

**Numbers.** Padded with leading zeros, like a scoreboard. `001 · 002 · 999,999`.

## Visual foundations

- **Corners.** Square. Always.
- **Borders.** 4px hard pixel borders in white, magenta, or cyan. Sometimes nested (outer black, inner color).
- **Shadows.** Marquee bloom only. No soft drop shadows.
- **Animation.** Stepped, never smooth. `steps(4, end)`. Blink at 1s, flash at 1.2s.
- **Overlays.** Hero compositions get scanlines + RGB sub-pixel + vignette + bezel.

## Family

The first sibling of the **Arcade** category. Planned next: **Mario** (platformer joy, sky blue + brick red), **Zelda** (parchment overworld, hyrulean greens), then a broader **Nintendo** sibling.

## Index

- [`tokens.css`](tokens.css) — `--ar-*` CSS variables
- [`colors_and_type.css`](colors_and_type.css) — semantic styles
- [`preview/`](preview) — 16 review cards
- [`SKILL.md`](SKILL.md) — manifest
- [`index.html`](index.html) — full showcase

## When NOT to use

- Long-form reading (pixel display fatigues)
- Enterprise software (this is loud)
- Anywhere you need to feel "modern" or "minimal"
