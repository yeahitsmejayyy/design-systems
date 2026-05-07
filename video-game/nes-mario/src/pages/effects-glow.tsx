import { PreviewFrame } from '@/components/mario/preview-frame'
import { Coin, QBlock, Pipe, Brick } from '@/components/mario/sprites'

export function EffectsGlow() {
  return (
    <PreviewFrame title="EFFECTS / SPRITES">
      <div className="p-7 flex flex-col gap-[22px]">
        <div className="flex gap-4 items-center">
          <Coin />
          <Coin animate />
          <span className="font-pixel text-[9px] text-ink min-w-[240px]">
            COIN · TALL PIXEL · SPIN STEPS(4)
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <QBlock />
          <span className="font-pixel text-[9px] text-ink min-w-[240px]">
            ?-BLOCK · BUMP 1.6S · TAN + RIVETS
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <Pipe />
          <span className="font-pixel text-[9px] text-ink min-w-[240px]">
            PIPE · KELLY GREEN · RIM HIGHLIGHTS
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <Brick />
          <span className="font-pixel text-[9px] text-ink min-w-[240px]">
            BRICK · MORTAR-CROSS PATTERN
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
