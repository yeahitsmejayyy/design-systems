import { PreviewFrame } from '@/components/arcade/preview-frame'

export function EffectsScanlines() {
  return (
    <PreviewFrame title="EFFECTS / SCANLINES" fullBleed>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[14px] z-10">
          <div className="font-pixel text-[44px] text-magenta animate-marquee-pulse">
            CLASSIC
          </div>
          <div className="font-pixel text-[12px] text-yellow text-glow-yellow animate-flash tracking-[0.1em]">
            ▶ PRESS START
          </div>
        </div>
        <div className="ar-scanlines-rgb" />
        <div className="ar-scanlines" />
        <div className="ar-bezel" />
        <div className="ar-vignette" />
        <div className="absolute bottom-[14px] left-0 right-0 text-center font-pixel text-[9px] text-mute z-20">
          SCANLINES · RGB SUB-PIXEL · BEZEL · VIGNETTE
        </div>
      </div>
    </PreviewFrame>
  )
}
