import { PreviewFrame } from '@/components/arcade/preview-frame'
import { Cursor } from '@/components/arcade/cursor'

export function ComponentsTerminal() {
  return (
    <PreviewFrame title="COMPONENTS / CABINET">
      <div className="p-7">
        <div className="bg-cabinet border-4 border-magenta shadow-glow-magenta relative overflow-hidden">
          <div className="bg-felt px-[18px] py-[10px] border-b-4 border-magenta flex items-center gap-[14px]">
            <span className="w-4 h-4 rounded-full bg-yellow shadow-glow-yellow" />
            <span className="w-4 h-4 rounded-full bg-yellow shadow-glow-yellow opacity-60" />
            <span className="w-4 h-4 rounded-full bg-yellow shadow-glow-yellow opacity-30" />
            <span className="ml-4 font-pixel text-[11px] text-magenta text-glow-magenta tracking-[0.1em]">
              ★ CLASSIC ARCADE — CABINET 04
            </span>
          </div>

          <div className="px-6 py-[22px] font-pixel text-[12px] leading-[2] relative">
            <div>
              <span className="text-magenta text-glow-magenta">▶</span>{' '}
              <span className="text-ink-soft">SELECT FIGHTER</span>
            </div>
            <div>
              <span className="text-cyan text-glow-cyan">P1</span>{' '}
              <span className="text-ink">JAY · LV 42</span>
            </div>
            <div>
              <span className="text-yellow text-glow-yellow">SCORE</span>{' '}
              <span className="text-ink-soft">042,650</span>{' '}
              <span className="text-green text-glow-green">1UP</span>
            </div>
            <div>
              <span className="text-magenta text-glow-magenta">▶</span>{' '}
              <Cursor />
            </div>
          </div>

          <div className="ar-scanlines" />
        </div>
      </div>
    </PreviewFrame>
  )
}
