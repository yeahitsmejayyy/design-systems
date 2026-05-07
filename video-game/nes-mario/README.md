# Mario

The second sibling in the **Arcade** category. Platformer joy. Sky-blue overworld, brick red, pipe green, coin gold, ?-block tan. _It's-a me._

## What it's for

- Onboarding flows that should feel friendly + rewarding
- Gamified product surfaces (streaks, achievements, levels)
- Kids' apps, education, anything cheerful
- Hackathon / community sites that need _joy_ (not edge)
- Anywhere "smash a brick, get a coin" is the right metaphor

## Visual DNA

- **Sky-blue background**, not black. This is the daytime sibling — bright by default, the only sibling that isn't dark-mode-first.
- **Sprite-outline everything.** 4px black outlines on cards, buttons, type. Hard 4px offset drop shadows on interactive elements (the chunky sprite shadow).
- **Five primary colors** (red · pipe green · coin gold · cloud white · brick brown). Bold, friendly, never desaturated. Mid saturation — saturated but tasteful, not jarring.
- **Press Start 2P + Inter, just like Classic Arcade.** Pixel display, sans body. Headlines get a 2px black text stroke — the sprite-text look.
- **Square corners, except pipe radius.** 0px on cards, 8px on the pipe rim, 999px on coins.
- **Steps + bounce easing.** Chrome animations are stepped; interactive elements use a slight bounce overshoot — the Mario jump arc.
- **No scanlines.** This is a clean homage, not strict-period CRT. The retro is in the type and outlines, not the screen filter.

## Color rules

- **Red = primary.** Mario's hat. CTAs, links, emphasis, the "go".
- **Pipe green = secondary.** Confirmations, success-adjacent, navigation.
- **Coin gold = reward + energy.** Achievements, points, "nice job", the toast.
- **Fire orange = warning/destructive.** Used sparingly — like a fire flower.
- **Luigi green = success.** Slightly brighter than pipe green; used for "well done", complete states.
- The five neighbors stay bold together — this isn't the muted homage school. Sky always saturated, red always saturated.

## Content fundamentals

**Voice.** Warm, simple, second person, a little exclamatory. Mario copy is direct and joyful.

- ✅ "Press A to jump!"
- ✅ "World 1-1 — Let's go!"
- ✅ "+200 — nice combo!"
- ❌ "Welcome to our gamification platform."

**Casing.** ALL CAPS on pixel display (lowercase doesn't render). Sentence case in body sans, with exclamation points where they earn it.

**Iconography.** ★ for points/achievement. ♥ for lives. ▶ for go. ? for ?-blocks/help. Coin glyph (○) for currency. Pipe (▼) for navigation/menus.

**Numbers.** Padded scoreboards still apply: `1-1 · 042,650 · ×3`.

## Visual foundations

- **Corners.** Square, except pipes (8px) and coins (999px).
- **Borders.** 4px black outlines on every card, button, input. This is non-negotiable — it's the sprite signature.
- **Shadows.** Hard offset only — `4px 4px 0 black`. No soft drop shadows ever. Coins glow.
- **Animation.** Bounce-eased on hover, stepped on chrome. Coins spin, blocks bump, flags wave.
- **Backgrounds.** Sky default. Cloud-pattern radial gradients for hero. Brick texture for "underground" sections.

## Family

The second sibling of the **Arcade** category. Sibling of: **Classic Arcade** (coin-op CRT, the dark-mode arcade ancestor). Planned next: **Zelda** (parchment overworld, hyrulean greens), then a broader **Nintendo** sibling.

What separates Mario from Classic Arcade: Classic is the cabinet itself (dark, scanlines, marquee neon). Mario is what's _on_ the screen (bright, sprites, sunshine). They share Press Start 2P; everything else flips.

## Index

- [`tokens.css`](tokens.css) — `--m-*` CSS variables
- [`colors_and_type.css`](colors_and_type.css) — semantic styles
- [`preview/`](preview) — 16 review cards
- [`SKILL.md`](SKILL.md) — manifest
- [`index.html`](index.html) — full showcase

## When NOT to use

- Serious / professional contexts (this is unapologetically playful)
- Long-form reading (sky background fatigues for body copy)
- Anywhere a muted or sophisticated tone is required
