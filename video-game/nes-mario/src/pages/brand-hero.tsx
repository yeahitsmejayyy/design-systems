import { PreviewFrame } from '@/components/mario/preview-frame'
import { Clouds } from '@/components/mario/clouds'
import { Plaque } from '@/components/mario/plaque'
import { QBlock } from '@/components/mario/sprites'

export function BrandHero() {
  return (
    <PreviewFrame title="BRAND / HERO" fullBleed>
      <div className="relative h-[420px] overflow-hidden bg-sky">
        <Clouds />

        {/* HUD */}
        <div className="absolute top-0 left-0 right-0 bg-ink border-b-[3px] border-outline px-[22px] py-2 flex justify-between font-pixel text-[11px] text-paper z-30">
          <span>
            MARIO · <span className="text-coin">042650</span>
          </span>
          <span>
            <span className="text-coin">×08</span> · WORLD{' '}
            <span className="text-coin">1-1</span> · TIME{' '}
            <span className="text-coin">286</span>
          </span>
        </div>

        {/* Plaque */}
        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 z-30">
          <Plaque size="md" className="text-center">
            <div className="text-[16px]">SUPER</div>
            <div className="text-[28px] mt-[6px]">MARIO BROS.</div>
          </Plaque>
        </div>

        {/* Floating ?-block */}
        <div className="absolute top-1/2 right-[12%] z-25">
          <QBlock className="w-[38px] h-[38px] text-[18px]" />
        </div>

        {/* Hills */}
        <div className="absolute bottom-[22%] left-0 right-0 h-[110px] pointer-events-none">
          <div
            className="absolute bottom-0 left-[4%] w-[200px] h-[100px] bg-hill-green border-4 border-outline border-b-0"
            style={{ borderRadius: '50% 50% 0 0 / 90% 90% 0 0' }}
          />
          <div
            className="absolute bottom-0 left-[50%] w-[250px] h-[120px] bg-hill-green border-4 border-outline border-b-0"
            style={{ borderRadius: '50% 50% 0 0 / 90% 90% 0 0' }}
          />
          <div
            className="absolute bottom-0 right-[4%] w-[160px] h-[80px] bg-hill-green border-4 border-outline border-b-0"
            style={{ borderRadius: '50% 50% 0 0 / 90% 90% 0 0' }}
          />
        </div>

        {/* Brick ground */}
        <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-brick border-t-4 border-outline">
          <div
            className="absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent 0 22px, var(--color-brick-dark) 22px 26px), repeating-linear-gradient(90deg, var(--color-brick-deep) 0 4px, transparent 4px 32px)',
            }}
          />
        </div>

        <div className="absolute bottom-1 left-0 right-0 text-center font-pixel text-[9px] text-paper-warm z-50 tracking-[0.1em]">
          SIBLING 02 · ARCADE FAMILY · LAVENDER OVERWORLD
        </div>
      </div>
    </PreviewFrame>
  )
}
