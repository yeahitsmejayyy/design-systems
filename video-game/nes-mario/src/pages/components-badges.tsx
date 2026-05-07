import { PreviewFrame } from '@/components/mario/preview-frame'
import { Badge } from '@/components/ui/badge'

function Dot() {
  return <span className="inline-block w-[6px] h-[6px] rounded-full bg-current mr-[10px]" />
}

export function ComponentsBadges() {
  return (
    <PreviewFrame title="COMPONENTS / BADGES" bg="paper">
      <div className="p-7 flex flex-col gap-[14px]">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            STATUS
          </span>
          <Badge variant="pipe"><Dot /> 1UP</Badge>
          <Badge variant="coin"><Dot /> COIN</Badge>
          <Badge variant="fire"><Dot /> FIRE</Badge>
          <Badge variant="red"><Dot /> HIT</Badge>
          <Badge variant="mute"><Dot /> IDLE</Badge>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            CATEGORY
          </span>
          <Badge variant="plaque">PLATFORMER</Badge>
          <Badge variant="pipe">PUZZLE</Badge>
          <Badge variant="block">PARTY</Badge>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            POWER-UP
          </span>
          <div className="inline-flex items-center gap-2 px-[14px] py-[10px] bg-coin border-4 border-outline shadow-pixel">
            <span className="inline-block -translate-y-[3px]">
              <span className="font-pixel text-[16px] text-ink animate-pulse-mario inline-block leading-none">
                ★
              </span>
            </span>
            <span className="font-pixel text-[10px] text-ink">
              SUPER STAR UNLOCKED
            </span>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
