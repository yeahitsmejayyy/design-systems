import { PreviewFrame } from '@/components/mario/preview-frame'
import { Input } from '@/components/ui/input'
import { Heart } from '@/components/mario/sprites'

export function ComponentsInputs() {
  return (
    <PreviewFrame title="COMPONENTS / INPUTS" bg="paper">
      <div className="p-7 flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-hill-green">
            // PLAYER NAME
          </label>
          <Input type="text" defaultValue="MARIO" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-hill-green">
            // LIVES
          </label>
          <div className="flex gap-2 items-center font-pixel text-[16px] text-ink">
            ×<span className="text-mario-red">03</span>
            <Heart />
            <Heart />
            <Heart />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-fire">
            // GAME OVER
          </label>
          <Input
            type="text"
            defaultValue="CONTINUE?"
            className="border-fire text-fire"
          />
          <span className="font-pixel text-[9px] text-fire">
            [!] OUT OF LIVES
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
