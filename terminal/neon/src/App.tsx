import { Link } from 'react-router-dom'
import { ChromeBar } from '@/components/terminal/chrome-bar'
import { BgWash } from '@/components/terminal/bg-wash'
import { Kicker } from '@/components/terminal/kicker'
import { Cursor } from '@/components/terminal/cursor'
import { SectionHead } from '@/components/terminal/section-head'
import { Manifest } from '@/components/terminal/manifest'

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
    title: 'Colors',
    meta: '4 surfaces · 7 accents',
    tiles: [
      {
        to: '/colors/surfaces',
        label: 'surfaces',
        title: 'Plum paper + terminal',
        desc: 'Default warmed plum, deepest violet-black for hero + terminal moments.',
      },
      {
        to: '/colors/ink',
        label: 'ink',
        title: 'Text tones',
        desc: 'Pink-cast off-white, softened secondary, muted plum, hairline rule.',
      },
      {
        to: '/colors/accents',
        label: 'accents',
        title: 'Magenta · cyan · lime ladder',
        desc: 'Magenta primary, cyan + lime as electric secondaries, violet for shadow.',
      },
    ],
  },
  {
    num: '02',
    title: 'Type',
    meta: 'Inter · JetBrains Mono',
    tiles: [
      {
        to: '/type/display',
        label: 'display',
        title: 'Hero w/ chromatic shadow',
        desc: 'Inter at 100+ with cyan + lime offset shadows — CRT misalignment.',
      },
      {
        to: '/type/scale',
        label: 'scale',
        title: 'Title → kicker',
        desc: 'Six sizes from 72 title down to 20 mono kicker.',
      },
      {
        to: '/type/mono',
        label: 'mono',
        title: 'JetBrains Mono',
        desc: 'Prompts, tags, code — magenta and lime carry the signal.',
      },
    ],
  },
  {
    num: '03',
    title: 'Spacing & effects',
    meta: '4 → 96 · halo · scanlines',
    tiles: [
      {
        to: '/spacing/scale',
        label: 'spacing',
        title: '8-step scale',
        desc: '4, 8, 16, 24, 32, 48, 64, 96, 120.',
      },
      {
        to: '/effects/glow',
        label: 'effects',
        title: 'Neon halo + chroma',
        desc: 'Box-shadow halos in accent colors; cyan + lime text-shadows.',
      },
      {
        to: '/effects/scanlines',
        label: 'effects',
        title: 'Scanlines + vignette',
        desc: 'CRT overlays for hero frames — 1px lines + radial vignette.',
      },
    ],
  },
  {
    num: '04',
    title: 'Components',
    meta: '5 families',
    tiles: [
      {
        to: '/components/buttons',
        label: 'buttons',
        title: 'Primary · secondary · ghost · terminal',
        desc: 'Mono labels, magenta halo on primary, prompt prefix on terminal.',
      },
      {
        to: '/components/inputs',
        label: 'inputs',
        title: 'Fields & terminal prompt',
        desc: 'Magenta focus ring + lime cursor on prompt variant.',
      },
      {
        to: '/components/cards',
        label: 'cards',
        title: 'Four variants',
        desc: 'Numbered row, quote, stat, gradient callout.',
      },
      {
        to: '/components/terminal',
        label: 'terminal',
        title: 'Window shell',
        desc: 'Magenta · amber · lime traffic lights, lime blinking cursor.',
      },
      {
        to: '/components/badges',
        label: 'badges',
        title: 'Status + category + kickers',
        desc: 'Outlined capsules across the magenta · cyan · lime palette.',
      },
    ],
  },
  {
    num: '05',
    title: 'Brand',
    meta: 'Lockups',
    tiles: [
      {
        to: '/brand/logotype',
        label: 'logotype',
        title: '[ Neon Terminal ]',
        desc: 'Bracketed, chromatic emphasis, lime cursor mark.',
      },
      {
        to: '/brand/hero',
        label: 'hero',
        title: 'Hero composition',
        desc: 'Wash + chrome + chromatic title + scanlines.',
      },
    ],
  },
]

export default function App() {
  return (
    <div className="bg-term min-h-screen relative">
      <BgWash variant="page" className="fixed z-0" />
      <div className="nt-scanlines fixed z-[1]" />
      <div className="nt-vignette fixed z-[1]" />

      <div className="relative z-[2] max-w-[1280px] mx-auto pt-20 px-12 pb-[120px]">
        <ChromeBar
          title="~/neon-terminal — index.html"
          className="mb-12"
        />

        <Kicker className="block mb-6">
          <span className="opacity-60">//</span> v.2026 · design system
        </Kicker>

        <h1 className="font-sans font-normal text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em] m-0 mb-8 text-ink">
          Neon{' '}
          <em className="italic font-light text-magenta text-hero-em">
            Terminal
          </em>
          .
        </h1>

        <p className="max-w-[760px] font-sans text-[20px] leading-[1.5] text-ink-soft m-0 mb-[60px]">
          A design system for interfaces that want to feel like a late-night
          IDE, a CRT monitor warmed-over, and a neon-soaked arcade all at once.
          Built for <em className="italic text-cyan">developer tools</em>,
          founder memos, and any surface that should feel simultaneously
          technical and alive.
        </p>

        <div className="font-mono text-[14px] text-ink-soft mb-10 flex items-center gap-[10px]">
          <span className="text-magenta text-glow-magenta">$</span>
          <span>ls neon-terminal/</span>
          <Cursor className="w-[9px] h-[18px] ml-[2px]" />
        </div>

        <Manifest
          entries={[
            { key: 'tokens.css', value: 'neon colors · type · spacing · effects' },
            { key: 'colors_and_type.css', value: 'semantic styles: h1 · p · code · links' },
            { key: 'README.md', value: 'voice, visual DNA, when to use' },
            { key: 'preview/', value: '16 design-system review cards' },
            { key: 'SKILL.md', value: 'use in Claude Code' },
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
                  className="bg-paper-dim border border-rule p-5 flex flex-col gap-3 transition-all duration-[180ms] no-underline hover:border-magenta hover:-translate-y-[2px] hover:shadow-glow-magenta"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                    {tile.label}
                  </span>
                  <span className="text-[18px] font-medium text-ink tracking-[-0.01em]">
                    {tile.title}
                  </span>
                  <span className="text-[13px] text-ink-soft leading-[1.5]">
                    {tile.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-[120px] pt-6 border-t border-rule flex justify-between font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          <span>fin — neon terminal v.2026</span>
          <span className="text-magenta">— exit 0</span>
        </div>
      </div>
    </div>
  )
}
