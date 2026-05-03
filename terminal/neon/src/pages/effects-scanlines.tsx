import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'

export function EffectsScanlines() {
  return (
    <PreviewFrame title="effects / scanlines" bg="term" fullBleed>
      <div className="relative h-screen overflow-hidden">
        <BgWash variant="hero" />
        <div className="nt-scanlines" />
        <div className="nt-vignette" />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[14px] z-10">
          <h1 className="text-[56px] font-light italic tracking-[-0.02em] m-0 text-magenta text-display-em">
            Hero wash
          </h1>
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.16em]">
            neon wash · scanlines · vignette
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
