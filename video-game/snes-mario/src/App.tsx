import { Link } from 'react-router-dom'
import { Clouds } from '@/components/mario/clouds'
import { HudStrip } from '@/components/mario/hud-strip'
import { Kicker } from '@/components/mario/kicker'
import { Plaque } from '@/components/mario/plaque'
import { PressStart } from '@/components/mario/press-start'
import { Manifest } from '@/components/mario/manifest'
import { SectionHead } from '@/components/mario/section-head'

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
    meta: '5 SPRITES · 4 SURFACES',
    tiles: [
      {
        to: '/colors/surfaces',
        label: 'SURFACES',
        title: 'SKY · CREAM · BRICK · NIGHT',
        desc: 'Lavender #9494FF overworld + cream paper + brick orange + ghost-house night.',
      },
      {
        to: '/colors/ink',
        label: 'INK',
        title: 'TRUE BLACK',
        desc: 'NES used real #000 outlines. Soft + mute + hairline rule for hierarchy.',
      },
      {
        to: '/colors/accents',
        label: 'ACCENTS',
        title: '5-COLOR SPRITE PALETTE',
        desc: 'Mario red, overalls brown, kelly hill green, coin gold, ?-block tan.',
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
        label: 'PLAQUE',
        title: 'CREAM-ON-BRICK',
        desc: 'The signature display lock-up. Orange plate, peach text, 4-rivet corners, hard shadow.',
      },
      {
        to: '/type/scale',
        label: 'SCALE',
        title: 'PLAQUE → HUD',
        desc: 'Six sizes from 28 plaque down to 11 HUD. Pixel display + Inter body.',
      },
      {
        to: '/type/mono',
        label: 'HUD',
        title: 'SMB1 BLACK BAR',
        desc: 'Black bar, white labels, gold values, four columns — the SMB1 score readout.',
      },
    ],
  },
  {
    num: '03',
    title: 'SPACING & EFFECTS',
    meta: '8PX TILE GRID',
    tiles: [
      {
        to: '/spacing/scale',
        label: 'SPACING',
        title: '8PX TILE / 16PX SPRITE',
        desc: 'Anchored to NES geometry: 8px tile, 16px sprite. 4 → 96 in the scale.',
      },
      {
        to: '/effects/glow',
        label: 'SPRITES',
        title: 'COIN · ?-BLOCK · PIPE · BRICK',
        desc: 'Inset shadows + 4-step animations — the platformer building blocks.',
      },
      {
        to: '/effects/scanlines',
        label: 'OVERWORLD',
        title: 'SKY + HILLS + GROUND',
        desc: 'Pixel clouds, kelly chevron hills, brick-mortar ground — World 1-1 baseline.',
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
        title: 'RED · PIPE · PLAQUE · COIN · BLOCK',
        desc: 'Pixel borders + hard offset. Press resolves the shadow into the button — clack.',
      },
      {
        to: '/components/inputs',
        label: 'INPUTS',
        title: 'CREAM FIELDS · LIVES',
        desc: 'Cream-paper input on black border. Heart-pixel lives counter, fire-orange error.',
      },
      {
        to: '/components/cards',
        label: 'CARDS',
        title: 'PAPER · PLAQUE · ?-BLOCK · PIPE',
        desc: 'Four variants — paper for default, plaque for hero, ?-block for callouts, pipe for nav.',
      },
      {
        to: '/components/terminal',
        label: 'DIALOG',
        title: 'NES MENU BOX',
        desc: 'Black bg + white text + portrait + bouncing arrow. The SMB-style dialogue.',
      },
      {
        to: '/components/badges',
        label: 'BADGES',
        title: 'STATUS · CATEGORY · POWER-UP',
        desc: 'Pixel-bordered capsules across the 6-color palette + coin-gold power-up toast.',
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
        label: 'PLAQUE LOGOTYPE',
        title: 'SUPER MARIO BROS.',
        desc: 'The signature lockup — cream pixel text on orange plate with 4 black rivets.',
      },
      {
        to: '/brand/hero',
        label: 'HERO',
        title: 'FULL OVERWORLD',
        desc: 'HUD + plaque + ?-block + kelly hills + brick ground — World 1-1 cinematic.',
      },
    ],
  },
]

export default function App() {
  return (
    <div className="bg-sky min-h-screen relative">
      <Clouds className="fixed z-0" />

      <div className="relative z-[2] max-w-[1280px] mx-auto pt-[60px] px-12 pb-[120px]">
        <HudStrip
          left={
            <>
              MARIO ·{' '}
              <span className="text-coin">042,650</span>
            </>
          }
          right={
            <>
              <span className="text-coin">×08</span> · WORLD{' '}
              <span className="text-hill-light">1-1</span> · TIME{' '}
              <span className="text-coin">286</span>
            </>
          }
          className="mb-8"
        />

        <Kicker className="mb-[18px]">
          // NES SMB1 · 1985 · LAVENDER OVERWORLD
        </Kicker>

        <div className="my-3 mb-7">
          <Plaque size="lg" className="max-w-full box-border">
            <div className="text-[clamp(20px,3.5vw,36px)] leading-[1.1] m-0">
              SUPER
            </div>
            <div className="text-[clamp(32px,6vw,64px)] leading-[1.1] mt-[10px]">
              MARIO BROS.
            </div>
          </Plaque>
        </div>

        <div className="max-w-[760px] font-sans text-[18px] leading-[1.55] text-ink bg-paper border-4 border-outline shadow-pixel my-7 px-6 py-5">
          The <em>NES Super Mario Bros.</em> palette, faithfully. Lavender
          sky. Cream-on-brick <strong>plaque</strong> as the hero pattern —
          orange plate, peach pixel text, hard black drop shadow, four corner
          rivets. Kelly-green hills, brick-mortar grounds, pixel-cyan clouds.
          The daytime side of the Arcade family — a deliberate counter to
          Classic Arcade's cabinet black.
        </div>

        <PressStart className="mb-12" />

        <Manifest
          entries={[
            { key: 'TOKENS.CSS', value: '"NES SMB1 PALETTE · PLAQUE · BRICK PATTERN · CLOUDS"' },
            { key: 'COLORS_AND_TYPE.CSS', value: '"H1 · P · CODE · LINKS"' },
            { key: 'README.MD', value: '"VOICE · DNA · RULES"' },
            { key: 'PREVIEW/', value: '"16 REVIEW CARDS"' },
            { key: 'SKILL.MD', value: '"USE IN CLAUDE CODE"' },
            { key: '1UP', value: 'FAMILY: 02 / 04 PLANNED · DISTINCT FROM CLASSIC ARCADE', variant: '1up' },
          ]}
        />

        {sections.map((section) => (
          <section key={section.num} className="mt-16">
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
                  className="bg-paper border-4 border-outline shadow-pixel p-[18px] flex flex-col gap-[10px] no-underline transition-[transform,box-shadow] duration-[80ms] [transition-timing-function:steps(2)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pixel-lg"
                >
                  <span className="font-pixel text-[9px] tracking-kicker text-mario-red">
                    {tile.label}
                  </span>
                  <span className="font-pixel text-[13px] text-hill-green tracking-[0.02em]">
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

        <div className="mt-24 pt-[18px] border-t-[3px] border-outline flex justify-between font-pixel text-[9px] tracking-kicker text-ink">
          <span>FIN — SUPER MARIO BROS. · 1985</span>
          <span className="text-mario-red">▶ THANK YOU MARIO</span>
        </div>
      </div>
    </div>
  )
}
