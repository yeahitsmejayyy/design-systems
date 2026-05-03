import { PreviewFrame } from '@/components/arcade/preview-frame'
import { Badge } from '@/components/ui/badge'

export function ComponentsBadges() {
  return (
    <PreviewFrame title="COMPONENTS / BADGES">
      <div className="p-7 flex flex-col gap-[14px]">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            STATUS
          </span>
          <Badge variant="green">● 1UP</Badge>
          <Badge variant="cyan">● ONLINE</Badge>
          <Badge variant="yellow">● COMBO</Badge>
          <Badge variant="red">● GAME OVER</Badge>
          <Badge variant="mute">● IDLE</Badge>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            CATEGORY
          </span>
          <Badge variant="magenta">FIGHTER</Badge>
          <Badge variant="cyan">PUZZLE</Badge>
          <Badge variant="yellow">RACING</Badge>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <span className="font-pixel text-[9px] text-mute min-w-[110px]">
            ACHIEVEMENT
          </span>
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-cabinet border-4 border-yellow shadow-glow-yellow">
            <span className="text-yellow font-pixel text-[14px] text-glow-yellow">
              ★
            </span>
            <span className="font-pixel text-[10px] text-yellow text-glow-yellow">
              FIRST BLOOD UNLOCKED
            </span>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
