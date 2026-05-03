import { PreviewFrame } from '@/components/terminal/preview-frame'

export function EffectsGlow() {
  return (
    <PreviewFrame title="effects / glow" bg="term">
      <div className="px-7 pt-9 pb-7 flex flex-col gap-7">
        <div className="flex gap-[18px] items-center">
          <div className="w-14 h-14 rounded-full bg-magenta shadow-glow-magenta" />
          <div className="w-14 h-14 rounded-full bg-cyan shadow-glow-cyan" />
          <div className="w-14 h-14 rounded-full bg-lime shadow-glow-lime" />
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            neon halo · 12+24px @ 55/25% alpha
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-ink text-chroma">
            Misaligned
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            chromatic · 3px cyan + -3px lime
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-magenta text-hero-em">
            Build
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            heavy · magenta + halo + 4px chroma
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
