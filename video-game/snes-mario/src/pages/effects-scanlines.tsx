import { PreviewFrame } from '@/components/mario/preview-frame'
import { Clouds } from '@/components/mario/clouds'
import { Plaque } from '@/components/mario/plaque'

export function EffectsScanlines() {
  return (
    <PreviewFrame title="EFFECTS / OVERWORLD" fullBleed>
      <div className="relative h-screen overflow-hidden bg-sky">
        <Clouds />

        <div className="absolute top-[14%] left-1/2 -translate-x-1/2 z-30">
          <Plaque size="sm" className="text-center">
            <div className="text-[16px]">SUPER</div>
            <div className="text-[22px] mt-1">MARIO BROS.</div>
          </Plaque>
        </div>

        <div className="absolute bottom-[38%] left-0 right-0 h-[90px] pointer-events-none">
          <div
            className="absolute bottom-0 left-[10%] w-[180px] h-[90px] bg-hill-green border-4 border-outline border-b-0"
            style={{ borderRadius: '50% 50% 0 0 / 90% 90% 0 0' }}
          />
          <div
            className="absolute bottom-0 left-[55%] w-[220px] h-[100px] bg-hill-green border-4 border-outline border-b-0"
            style={{ borderRadius: '50% 50% 0 0 / 90% 90% 0 0' }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-brick border-t-4 border-outline">
          <div
            className="absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent 0 22px, var(--color-brick-dark) 22px 26px), repeating-linear-gradient(90deg, var(--color-brick-deep) 0 4px, transparent 4px 32px)',
            }}
          />
        </div>

        <div className="absolute bottom-2 left-0 right-0 text-center font-pixel text-[9px] text-paper-warm z-50 tracking-[0.08em]">
          SKY · PIXEL CLOUDS · KELLY HILLS · BRICK MORTAR GROUND
        </div>
      </div>
    </PreviewFrame>
  )
}
