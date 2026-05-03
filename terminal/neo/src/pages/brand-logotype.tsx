import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'
import { Cursor } from '@/components/terminal/cursor'

export function BrandLogotype() {
  return (
    <PreviewFrame title="brand / logotype" bg="paper" fullBleed>
      <div className="relative flex items-center justify-center h-[200px] overflow-hidden pt-12">
        <BgWash variant="small" />
        <div className="mx-binary-grain" />

        <div className="relative z-10 flex items-center gap-[14px]">
          <span className="text-bright text-glow-bright font-mono text-[28px]">
            [
          </span>
          <span className="font-sans font-normal text-[32px] tracking-[-0.02em] text-ink">
            Neo{' '}
            <em className="italic font-light text-bright text-logotype-em">
              Terminal
            </em>
          </span>
          <span className="text-bright text-glow-bright font-mono text-[28px]">
            ]
          </span>
          <Cursor className="w-[10px] h-[22px] align-[-3px]" />
        </div>

        <div className="absolute bottom-[14px] inset-x-0 text-center font-mono text-[9px] text-mute tracking-[0.2em] opacity-50 z-[5]">
          01001101 00100000 01010100
        </div>
      </div>
    </PreviewFrame>
  )
}
