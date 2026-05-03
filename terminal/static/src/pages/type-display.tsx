import { PreviewFrame } from '@/components/terminal/preview-frame'

export function TypeDisplay() {
  return (
    <PreviewFrame title="type / display">
      <div className="p-7">
        <div className="font-sans font-normal text-[84px] leading-[0.95] tracking-[-0.02em] text-ink">
          Static{' '}
          <em className="italic font-light text-bright text-display-em">Era</em>
        </div>
        <div className="font-mono text-[11px] text-mute uppercase tracking-[0.16em] mt-[14px]">
          display · inter 400 · 132/95% · -0.02em · gray-ghost chromatic
        </div>
      </div>
    </PreviewFrame>
  )
}
