import { PreviewFrame } from '@/components/mario/preview-frame'
import { Clouds } from '@/components/mario/clouds'
import { Plaque } from '@/components/mario/plaque'

export function TypeDisplay() {
  return (
    <PreviewFrame title="TYPE / DISPLAY" fullBleed>
      <div className="relative min-h-[280px] pt-14 px-7 pb-7 flex flex-col items-center justify-center gap-[18px] overflow-hidden bg-sky">
        <Clouds />
        <Plaque size="md" className="relative z-10 text-center">
          <div className="text-[22px]">SUPER</div>
          <div className="text-[36px] mt-2">MARIO BROS.</div>
        </Plaque>
        <div className="relative z-10 font-pixel text-[10px] text-ink tracking-[0.08em]">
          PLAQUE LOGOTYPE · CREAM-ON-BRICK · 4 CORNER RIVETS
        </div>
      </div>
    </PreviewFrame>
  )
}
