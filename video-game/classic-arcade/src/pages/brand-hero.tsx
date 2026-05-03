import { PreviewFrame } from '@/components/arcade/preview-frame'
import { BgWash } from '@/components/arcade/bg-wash'

export function BrandHero() {
  return (
    <PreviewFrame title="BRAND / HERO" fullBleed>
      <div className="relative h-[320px] overflow-hidden">
        <BgWash variant="hero" />

        <div className="absolute top-0 left-0 right-0 h-9 z-30 bg-felt border-b-4 border-magenta flex items-center gap-2 pl-[14px]">
          <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow" />
          <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow opacity-60" />
          <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow opacity-30" />
          <span className="ml-4 font-pixel text-[11px] text-magenta text-glow-magenta tracking-[0.1em]">
            ~/CLASSIC-ARCADE — HERO.HTML
          </span>
        </div>

        <div className="absolute top-[50px] left-0 right-0 flex justify-between px-7 font-pixel text-[10px]">
          <span className="text-cyan text-glow-cyan">P1 · 042,650</span>
          <span className="text-yellow text-glow-yellow">★ HI · 999,999</span>
        </div>

        <div className="absolute inset-x-0 top-9 bottom-0 z-20 flex flex-col justify-center items-center gap-4 text-center">
          <div className="font-pixel text-[56px] text-magenta animate-marquee-pulse tracking-[0.04em]">
            CLASSIC ARCADE
          </div>
          <div className="font-pixel text-[12px] text-yellow text-glow-yellow animate-flash tracking-[0.18em]">
            ▶ PRESS START TO BEGIN
          </div>
        </div>

        <div className="ar-scanlines-rgb" />
        <div className="ar-scanlines" />
        <div className="ar-bezel" />
        <div className="ar-vignette" />

        <div className="absolute bottom-[14px] left-0 right-0 text-center font-pixel text-[9px] text-mute z-30 tracking-[0.1em]">
          © 1985 · ARCADE CATEGORY · SIBLING 01 OF 04
        </div>
      </div>
    </PreviewFrame>
  )
}
