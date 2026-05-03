import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'
import { Cursor } from '@/components/terminal/cursor'

export function BrandLogotype() {
  return (
    <PreviewFrame title="brand / logotype" bg="term" fullBleed>
      <div className="relative flex items-center justify-center h-[200px] overflow-hidden pt-12">
        <BgWash variant="small" />
        <div className="st-grain" />
        <div className="st-scanlines" />

        <div className="relative z-10 flex items-center gap-[14px]">
          <span className="text-bright text-glow-bright font-mono text-[28px]">
            [
          </span>
          <span className="font-sans font-normal text-[32px] tracking-[-0.02em] text-ink">
            Static{' '}
            <em className="italic font-light text-bright text-logotype-em">
              Terminal
            </em>
          </span>
          <span className="text-bright text-glow-bright font-mono text-[28px]">
            ]
          </span>
          <Cursor className="w-[10px] h-[22px] align-[-3px]" />
        </div>
      </div>
    </PreviewFrame>
  )
}
