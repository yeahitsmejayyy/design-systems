import { Link } from 'react-router-dom'
import { MarqueeBar } from '@/components/arcade/marquee-bar'
import { BgWash } from '@/components/arcade/bg-wash'
import { Kicker } from '@/components/arcade/kicker'
import { SectionHead } from '@/components/arcade/section-head'
import { Scoreboard } from '@/components/arcade/scoreboard'
import { HudStrip } from '@/components/arcade/hud-strip'
import { PressStart } from '@/components/arcade/press-start'

interface Tile {
  to: string
  label: string
  title: string
  desc: string
}

interface Section {
  num: string
  title: string
  meta: string
  tiles: Tile[]
}

const sections: Section[] = [
  {
    num: '01',
    title: 'COLORS',
    meta: '5 NEONS · 4 SURFACES',
    tiles: [
      {
        to: '/colors/surfaces',
        label: 'SURFACES',
        title: 'CABINET BLACK',
        desc: 'Magenta-tinted near-black at #0A0410. Never pure black except in scoreboard cabinet.',
      },
      {
        to: '/colors/ink',
        label: 'INK',
        title: 'CRT PHOSPHOR',
        desc: 'Pure white primary, lavender soft, dim mute, hairline rule — readable through scanlines.',
      },
      {
        to: '/colors/accents',
        label: 'ACCENTS',
        title: 'FIVE-NEON PALETTE',
        desc: 'Magenta primary, cyan signal, yellow energy, red alarm, green 1UP.',
      },
    ],
  },
  {
    num: '02',
    title: 'TYPE',
    meta: 'PRESS START 2P · INTER',
    tiles: [
      {
        to: '/type/display',
        label: 'DISPLAY',
        title: 'MARQUEE PULSE',
        desc: 'Press Start 2P at 56–96px in magenta with breathing glow — the cabinet headline.',
      },
      {
        to: '/type/scale',
        label: 'SCALE',
        title: 'MARQUEE → HUD',
        desc: 'Six sizes from 32px marquee down to 11px HUD. Pixel + sans dual stack.',
      },
      {
        to: '/type/mono',
        label: 'SCOREBOARD',
        title: 'PIXEL ROLES',
        desc: 'Padded numerics, three-letter initials — the scoreboard taxonomy.',
      },
    ],
  },
  {
    num: '03',
    title: 'SPACING & EFFECTS',
    meta: '4 → 96 · GLOW · CRT',
    tiles: [
      {
        to: '/spacing/scale',
        label: 'SPACING',
        title: '8-STEP SCALE',
        desc: '4, 8, 16, 24, 32, 48, 64, 96 — magenta-to-cyan gradient bars.',
      },
      {
        to: '/effects/glow',
        label: 'GLOW',
        title: 'FIVE NEON HALOS',
        desc: 'Marquee pulse at 1.6s, press-start flash at 1.2s, all stepped easings.',
      },
      {
        to: '/effects/scanlines',
        label: 'CRT',
        title: 'SCANLINES + BEZEL',
        desc: 'Strict period — base scanlines, RGB sub-pixel layer, bezel ring, vignette.',
      },
    ],
  },
  {
    num: '04',
    title: 'COMPONENTS',
    meta: '5 FAMILIES',
    tiles: [
      {
        to: '/components/buttons',
        label: 'BUTTONS',
        title: 'PRIMARY · CYAN · COIN',
        desc: 'Magenta solid primary, neon-bordered secondaries, flashing yellow INSERT COIN.',
      },
      {
        to: '/components/inputs',
        label: 'INPUTS',
        title: 'INITIALS & FIELDS',
        desc: 'Three-slot AAA initials entry with active-slot blink. Pixel inputs only.',
      },
      {
        to: '/components/cards',
        label: 'CARDS',
        title: 'FOUR VARIANTS',
        desc: 'Default · score · HUD with hearts · gradient quest callout.',
      },
      {
        to: '/components/terminal',
        label: 'CABINET',
        title: 'FRAMED SHELL',
        desc: 'Marquee bar with coins + screen body — the arcade equivalent of a window chrome.',
      },
      {
        to: '/components/badges',
        label: 'BADGES',
        title: 'STATUS · CATEGORY · ★',
        desc: 'Pixel-bordered capsules across all five neons, plus achievement toast.',
      },
    ],
  },
  {
    num: '05',
    title: 'BRAND',
    meta: 'LOCKUPS',
    tiles: [
      {
        to: '/brand/logotype',
        label: 'LOGOTYPE',
        title: '★ CLASSIC ARCADE ★',
        desc: 'Star-bracketed wordmark, three coins descending, INSERT COIN flash.',
      },
      {
        to: '/brand/hero',
        label: 'HERO',
        title: 'FULL CABINET',
        desc: 'Marquee bar, HUD strip, pulsing title — the whole loaded composition.',
      },
    ],
  },
]

export default function App() {
  return (
    <div className="bg-paper min-h-screen relative">
      <BgWash variant="page" className="fixed z-0" />
      <div className="ar-scanlines-rgb fixed z-[1]" />
      <div className="ar-scanlines fixed z-[1]" />
      <div className="ar-bezel fixed z-[1]" />
      <div className="ar-vignette fixed z-[1]" />

      <div className="relative z-[2] max-w-[1280px] mx-auto pt-20 px-12 pb-[120px]">
        <MarqueeBar
          title="★ ~/CLASSIC-ARCADE — INDEX.HTML"
          className="mb-12"
        />

        <HudStrip
          left="P1 · 042,650"
          right="★ HI · 999,999"
          className="mb-8"
        />

        <Kicker className="block mb-6">
          // CABINET 1985 · DESIGN SYSTEM
        </Kicker>

        <h1 className="font-pixel text-[clamp(36px,7vw,84px)] leading-[1.05] tracking-[0.02em] m-0 mb-8 text-magenta animate-marquee-pulse">
          CLASSIC ARCADE
        </h1>

        <p className="max-w-[760px] font-sans text-[20px] leading-[1.55] text-ink-soft m-0 mb-8">
          The first sibling in the{' '}
          <em className="not-italic font-semibold text-yellow text-glow-yellow">
            Arcade
          </em>{' '}
          category. Coin-op CRT cabinet, neon marquee glow, scoreboards.
          Magenta primary, cyan signal, yellow energy, red alarm, green 1UP —
          five-color palette stepping together like a row of cartridge spines
          on the cabinet shelf.
        </p>

        <PressStart className="mb-[60px]" />

        <Scoreboard
          entries={[
            { key: 'TOKENS.CSS', value: '"NEON PALETTE · TYPE · GLOW · STEPS"' },
            { key: 'COLORS_AND_TYPE.CSS', value: '"H1 · P · CODE · LINKS"' },
            { key: 'README.MD', value: '"VOICE · DNA · RULES"' },
            { key: 'PREVIEW/', value: '"16 REVIEW CARDS"' },
            { key: 'SKILL.MD', value: '"USE IN CLAUDE CODE"' },
            { key: '1UP', value: 'FAMILY: 01 / 04 PLANNED', variant: '1up' },
          ]}
        />

        {sections.map((section) => (
          <section key={section.num} className="mt-20">
            <SectionHead
              number={section.num}
              title={section.title}
              meta={section.meta}
            />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[18px]">
              {section.tiles.map((tile) => (
                <Link
                  key={tile.to}
                  to={tile.to}
                  className="bg-paper-dim border-4 border-rule p-5 flex flex-col gap-3 no-underline transition-[border-color,transform,box-shadow] duration-[100ms] [transition-timing-function:steps(2)] hover:border-magenta hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-glow-magenta"
                >
                  <span className="font-pixel text-[9px] tracking-[0.18em] text-yellow text-glow-yellow">
                    {tile.label}
                  </span>
                  <span className="font-pixel text-[13px] text-cyan text-glow-cyan tracking-[0.02em]">
                    {tile.title}
                  </span>
                  <span className="text-[13px] text-ink-soft leading-[1.55] font-sans">
                    {tile.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-[120px] pt-6 border-t-2 border-dashed border-rule flex justify-between font-pixel text-[9px] tracking-[0.18em] text-mute">
          <span>FIN — CLASSIC ARCADE · 1985</span>
          <span className="text-magenta text-glow-magenta">▶ INSERT COIN</span>
        </div>
      </div>
    </div>
  )
}
