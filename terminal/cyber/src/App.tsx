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
    meta: 'cyan signal · pink accent',
    tiles: [
      {
        to: '/colors/surfaces',
        label: 'surfaces',
        title: 'Midnight blue, never black',
        desc: 'Default paper at #060c1a. Pure black reserved for terminal.',
      },
      {
        to: '/colors/ink',
        label: 'ink',
        title: 'Cool blue-tinted whites',
        desc: 'Off-white primary stepped down through cool blue mute and hairline rule.',
      },
      {
        to: '/colors/accents',
        label: 'accents',
        title: 'Cyan ladder + rare pink',
        desc: 'Electric cyan workhorse, hot magenta-pink as the once-per-screen spice.',
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
        title: 'Hero w/ cyan + pink split',
        desc: 'Inter at 100+ with two-color chromatic aberration — the neon-sign DNA.',
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
        desc: 'Cyan signal, pink alarm, mute meta — full prompt taxonomy.',
      },
    ],
  },
  {
    num: '03',
    title: 'Spacing & effects',
    meta: '4 → 96 · halo · haze',
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
        title: 'Cyan halo + pink halo',
        desc: 'Heavy cyan bloom, lone hot-pink halo, chromatic two-color split.',
      },
      {
        to: '/effects/scanlines',
        label: 'effects',
        title: 'Haze · grain · scanlines',
        desc: 'Wet-street atmospheric stack — the most loaded of the four siblings.',
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
        title: 'Primary · secondary · ghost · hot · terminal',
        desc: 'Cyan primary, lone hot-pink for destructive, prompt prefix on terminal.',
      },
      {
        to: '/components/inputs',
        label: 'inputs',
        title: 'Fields & terminal prompt',
        desc: 'Cyan focus ring with glow; pink-bordered error state.',
      },
      {
        to: '/components/cards',
        label: 'cards',
        title: 'Four variants',
        desc: 'Numbered row, quote, stat, cyan-to-pink gradient callout.',
      },
      {
        to: '/components/terminal',
        label: 'terminal',
        title: 'Window shell',
        desc: 'Three glowing cyan dots at descending opacity. No more red/amber.',
      },
      {
        to: '/components/badges',
        label: 'badges',
        title: 'Status + category + kickers',
        desc: 'Outlined capsules across cyan ladder + lone pink "breached" state.',
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
        title: '[ Cyber Terminal ]',
        desc: 'Bracketed, hot-pink emphasis on the wordmark, cursor mark.',
      },
      {
        to: '/brand/hero',
        label: 'hero',
        title: 'Hero composition',
        desc: 'Full atmospheric stack — wash, chrome, chromatic title, scanlines, vignette.',
      },
    ],
  },
]

export default function App() {
  return (
    <div className="bg-paper min-h-screen relative">
      <BgWash variant="page" className="fixed z-0" />
      <div className="cy-grain fixed z-[1]" />
      <div className="cy-scanlines fixed z-[1]" />
      <div className="cy-vignette fixed z-[1]" />

      <div className="relative z-[2] max-w-[1280px] mx-auto pt-20 px-12 pb-[120px]">
        <ChromeBar
          title="~/cyber-terminal — index.html"
          className="mb-12"
        />

        <Kicker className="block mb-6">
          <span className="opacity-60">//</span> v.2049 · design system
        </Kicker>

        <h1 className="font-sans font-normal text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em] m-0 mb-8 text-ink">
          Cyber{' '}
          <em className="italic font-light text-bright text-hero-em">
            Terminal
          </em>
          .
        </h1>

        <p className="max-w-[760px] font-sans text-[20px] leading-[1.5] text-ink-soft m-0 mb-[60px]">
          The <em className="italic text-hot text-glow-hot">neon-noir</em>{' '}
          sibling of Neon · Static · Matrix Terminal. Midnight-blue night,
          electric cyan as the dominant signal, hot magenta-pink as the rare
          accent. Wet-street haze, chromatic split, and CRT scanlines — for
          when the system needs{' '}
          <em className="italic text-hot text-glow-hot">atmosphere</em>.
        </p>

        <div className="font-mono text-[14px] text-ink-soft mb-10 flex items-center gap-[10px]">
          <span className="text-bright text-glow-bright">$</span>
          <span>ls cyber-terminal/</span>
          <Cursor className="w-[9px] h-[18px] ml-[2px]" />
        </div>

        <Manifest
          entries={[
            { key: 'tokens.css', value: 'cyan + pink palette · type · spacing · haze' },
            { key: 'colors_and_type.css', value: 'semantic styles: h1 · p · code · links' },
            { key: 'README.md', value: 'voice, visual DNA, the hot-pink rule' },
            { key: 'preview/', value: '16 design-system review cards' },
            { key: 'SKILL.md', value: 'use in Claude Code' },
          ]}
        />

        <div className="font-mono text-[10px] text-mute tracking-[0.22em] opacity-70 text-center mt-6 leading-[1.8]">
          空 き <span className="text-hot text-glow-hot">P O D</span> 有 り ·
          NEON DISTRICT · ALLEY 04
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
          <span>fin — cyber terminal v.2049</span>
          <span className="text-hot text-glow-hot">→ jack out</span>
        </div>
      </div>
    </div>
  )
}
