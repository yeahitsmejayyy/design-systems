import { PreviewFrame } from '@/components/mario/preview-frame'
import { Clouds } from '@/components/mario/clouds'

export function ComponentsTerminal() {
  return (
    <PreviewFrame title="COMPONENTS / DIALOG">
      <div className="relative p-7 min-h-[420px] overflow-hidden">
        <Clouds className="opacity-70" />

        <div className="relative z-10 bg-ink border-4 border-paper shadow-pixel-lg px-[22px] py-[18px] max-w-[540px] text-paper">
          <div className="flex items-center gap-3 pb-3 border-b-[3px] border-paper mb-3">
            <div className="w-11 h-11 bg-mario-red border-[3px] border-paper flex items-center justify-center font-pixel text-[22px] text-paper-warm text-shadow-pixel-sm">
              M
            </div>
            <span className="font-pixel text-[12px] text-coin">MARIO</span>
          </div>
          <div className="font-pixel text-[12px] leading-[2] text-paper">
            <div>
              THANK YOU <span className="text-mario-red">PRINCESS</span>!
            </div>
            <div>
              BUT OUR <span className="text-hill-light">PIPE</span> IS IN
              ANOTHER CASTLE.
            </div>
            <div>
              READY FOR WORLD 1-2?
              <span className="inline-block ml-1 text-coin animate-bounce-mario">
                ▼
              </span>
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
