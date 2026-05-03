import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'

/**
 * Despite the route name (preserved for parallelism with sibling systems),
 * Neo Terminal uses NO scanlines — the equivalent atmospheric texture is
 * the binary-grain SVG noise overlay + vignette.
 */
export function EffectsScanlines() {
  return (
    <PreviewFrame title="effects / binary-grain" bg="term" fullBleed>
      <div className="relative h-screen overflow-hidden">
        <BgWash variant="hero" />
        <div className="mx-binary-grain" />
        <div className="mx-vignette" />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[14px] z-10">
          <h1 className="text-[56px] font-light italic tracking-[-0.02em] m-0 text-bright text-display-em">
            Hero wash
          </h1>
          <div className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.16em]">
            phosphor wash · binary-grain · vignette · no scanlines
          </div>
        </div>

        <div className="absolute bottom-3 inset-x-0 z-20 text-center font-mono text-[10px] text-mute tracking-[0.18em] opacity-55">
          01010111 01000001 01001011 01000101 00100000 01010101 01010000
        </div>
      </div>
    </PreviewFrame>
  )
}
