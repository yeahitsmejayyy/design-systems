import { PreviewFrame } from '@/components/arcade/preview-frame'
import { Input } from '@/components/ui/input'

export function ComponentsInputs() {
  return (
    <PreviewFrame title="COMPONENTS / INPUTS">
      <div className="p-7 flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-cyan text-glow-cyan">
            // PLAYER NAME
          </label>
          <Input type="text" defaultValue="JAY" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-cyan text-glow-cyan">
            // HIGH SCORE ENTRY
          </label>
          <div className="flex gap-2">
            <div className="w-14 h-14 border-4 border-cyan bg-cabinet flex items-center justify-center font-pixel text-[28px] text-cyan text-glow-cyan">
              A
            </div>
            <div className="w-14 h-14 border-4 border-cyan bg-cabinet flex items-center justify-center font-pixel text-[28px] text-cyan text-glow-cyan">
              A
            </div>
            <div className="w-14 h-14 border-4 border-magenta bg-cabinet flex items-center justify-center font-pixel text-[28px] text-magenta text-glow-magenta animate-flash-fast">
              A
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-pixel text-[10px] text-red text-glow-red">
            // GAME OVER
          </label>
          <Input
            type="text"
            defaultValue="CONTINUE?"
            className="border-red text-red text-glow-red focus:border-red focus:shadow-glow-red"
          />
          <span className="font-pixel text-[9px] text-red text-glow-red">
            [X] CREDITS = 0
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
