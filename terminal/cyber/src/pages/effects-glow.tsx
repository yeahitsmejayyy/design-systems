import { PreviewFrame } from '@/components/terminal/preview-frame'

export function EffectsGlow() {
  return (
    <PreviewFrame title="effects / glow" bg="term">
      <div className="px-7 pt-9 pb-7 flex flex-col gap-7">
        <div className="flex gap-[18px] items-center">
          <div className="w-14 h-14 rounded-full bg-bright shadow-glow-bright" />
          <div className="w-14 h-14 rounded-full bg-mid shadow-glow-mid" />
          <div className="w-14 h-14 rounded-full bg-hot shadow-glow-hot" />
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[220px]">
            cyan halo + lone hot-pink halo
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-ink text-chroma">
            Misaligned
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[220px]">
            chromatic · cyan + hot-pink ghosts
          </span>
        </div>

        <div className="flex gap-[18px] items-center">
          <span className="text-[52px] font-normal tracking-[-0.02em] leading-none text-bright text-hero-em">
            Live
          </span>
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[220px]">
            heavy · cyan halo + 4px split
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
