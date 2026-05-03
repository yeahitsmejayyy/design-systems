import { PreviewFrame } from '@/components/terminal/preview-frame'

export function EffectsGlow() {
  return (
    <PreviewFrame title="effects / glow" bg="term">
      <div className="px-7 pt-9 pb-7 flex flex-col gap-7">
        <div className="flex gap-[18px] items-center">
          <div className="w-14 h-14 rounded-full bg-bright shadow-glow-bright" />
          <div className="w-14 h-14 rounded-full bg-mid shadow-glow-mid" />
          <div className="w-14 h-14 rounded-full bg-soft shadow-glow-soft" />
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            white halo · 12+24px @ 45/18% alpha
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-ink text-chroma">
            Misaligned
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            chromatic · 3px light + -3px dark gray
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-bright text-hero-em">
            Static
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[200px]">
            heavy · white + halo + 4px gray ghosts
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
