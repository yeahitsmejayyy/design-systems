import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'

export function EffectsScanlines() {
  return (
    <PreviewFrame title="effects / atmosphere" bg="paper" fullBleed>
      <div className="relative h-screen overflow-hidden">
        <BgWash variant="hero" />
        <div className="cy-grain" />
        <div className="cy-scanlines" />
        <div className="cy-vignette" />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[14px] z-10">
          <h1 className="text-[56px] font-light italic tracking-[-0.02em] m-0 text-bright text-hero-em">
            Hero atmosphere
          </h1>
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.16em]">
            cyan + pink wash · grain · scanlines · vignette
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
