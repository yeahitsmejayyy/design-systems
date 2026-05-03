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
    meta: '4 surfaces · 7 tones',
    tiles: [
      {
        to: '/colors/surfaces',
        label: 'surfaces',
        title: 'Pure black + tinted lift',
        desc: 'Canonical pure-black background. Faintly green-tinted card surfaces.',
      },
      {
        to: '/colors/ink',
        label: 'ink',
        title: 'Phosphor text tones',
        desc: 'Soft phosphor for primary, stepped down through mute and rule.',
      },
      {
        to: '/colors/accents',
        label: 'accents',
        title: 'Phosphor luminance ladder',
        desc: 'Pure #00ff41 primary. Mid + soft + shadow greens as secondary.',
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
        title: 'Hero w/ green-ghost shadow',
        desc: 'Inter at 100+ with phosphor + dark-green offset shadows.',
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
        desc: 'Prompts, tags, code — phosphor carries every role.',
      },
    ],
  },
  {
    num: '03',
    title: 'Spacing & effects',
    meta: '4 → 96 · halo · binary',
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
        title: 'Phosphor halo + chroma',
        desc: 'CRT-bloom halos in green; phosphor + deep-green text shadows.',
      },
      {
        to: '/effects/scanlines',
        label: 'effects',
        title: 'Binary grain + vignette',
        desc: 'Green binary noise overlay replaces digital rain. No scanlines.',
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
        desc: 'Mono labels, phosphor halo on primary, prompt prefix on terminal.',
      },
      {
        to: '/components/inputs',
        label: 'inputs',
        title: 'Fields & terminal prompt',
        desc: 'Phosphor focus ring + glow + cursor on prompt variant.',
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
        desc: 'Three glowing green dots at descending opacity.',
      },
      {
        to: '/components/badges',
        label: 'badges',
        title: 'Status + category + kickers',
        desc: 'Outlined capsules across the phosphor luminance ladder.',
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
        title: '[ Neo Terminal ]',
        desc: 'Bracketed, green-ghost emphasis, cursor mark, binary footer.',
      },
      {
        to: '/brand/hero',
        label: 'hero',
        title: 'Hero composition',
        desc: 'Wash + chrome + chromatic title + binary-grain texture.',
      },
    ],
  },
]

export default function App() {
  return (
    <div className="bg-paper min-h-screen relative">
      <BgWash variant="page" className="fixed z-0" />
      <div className="mx-binary-grain fixed z-[1]" />
      <div className="mx-vignette fixed z-[1]" />

      <div className="relative z-[2] max-w-[1280px] mx-auto pt-20 px-12 pb-[120px]">
        <ChromeBar
          title="~/neo-terminal — index.html"
          className="mb-12"
        />

        <Kicker className="block mb-6">
          <span className="opacity-60">//</span> v.1999 · design system
        </Kicker>

        <h1 className="font-sans font-normal text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em] m-0 mb-8 text-ink">
          Neo{' '}
          <em className="italic font-light text-bright text-hero-em">
            Terminal
          </em>
          .
        </h1>

        <p className="max-w-[760px] font-sans text-[20px] leading-[1.5] text-ink-soft m-0 mb-[60px]">
          The{' '}
          <em className="italic text-bright text-glow-bright">phosphor-green</em>{' '}
          sibling of Neon Terminal and Static Terminal. Pure black, strict
          monochrome green, no digital rain, no scanlines — just green
          typography, chromatic phosphor ghosts, and binary as ornamental
          texture. For when the system needs to be the message.
        </p>

        <div className="font-mono text-[14px] text-ink-soft mb-10 flex items-center gap-[10px]">
          <span className="text-bright text-glow-bright">$</span>
          <span>ls neo-terminal/</span>
          <Cursor className="w-[9px] h-[18px] ml-[2px]" />
        </div>

        <Manifest
          entries={[
            { key: 'tokens.css', value: 'phosphor colors · type · spacing · effects' },
            { key: 'colors_and_type.css', value: 'semantic styles: h1 · p · code · links' },
            { key: 'README.md', value: 'voice, visual DNA, when to use' },
            { key: 'preview/', value: '16 design-system review cards' },
            { key: 'SKILL.md', value: 'use in Claude Code' },
          ]}
        />

        <div className="font-mono text-[10px] text-mute tracking-[0.22em] opacity-60 text-center mt-6 leading-[1.8]">
          01010111 01000001 01001011 01000101 00100000 01010101 01010000
        </div>

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
                  className="bg-paper-dim border border-rule p-5 flex flex-col gap-3 transition-all duration-[180ms] no-underline hover:border-bright hover:-translate-y-[2px] hover:shadow-glow-bright"
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
          <span>fin — neo terminal v.1999</span>
          <span className="text-bright text-glow-bright">— exit 0</span>
        </div>
      </div>
    </div>
  )
}
