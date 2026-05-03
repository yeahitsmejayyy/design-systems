import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Cursor } from '@/components/terminal/cursor'

export function ComponentsTerminal() {
  return (
    <PreviewFrame title="components / terminal">
      <div className="p-7">
        <div className="bg-term border border-rule rounded overflow-hidden shadow-term-bloom">
          <div className="h-9 bg-black/60 flex items-center gap-2 pl-[14px] border-b border-rule">
            <span className="w-[11px] h-[11px] rounded-full bg-bright shadow-dot-glow" />
            <span className="w-[11px] h-[11px] rounded-full bg-bright shadow-dot-glow opacity-55" />
            <span className="w-[11px] h-[11px] rounded-full bg-bright shadow-dot-glow opacity-25" />
            <span className="ml-4 font-mono text-[11px] text-mute">
              ~/cyber-terminal — zsh — 120×40
            </span>
          </div>
          <div className="px-5 py-[18px] font-mono text-[13px] leading-[1.7] text-ink-soft">
            <div>
              <span className="text-bright text-glow-bright">$</span> agent run
              --task "trace ghost"
            </div>
            <div className="text-mute">→ scanning 14 nodes · 2 districts</div>
            <div>
              <span className="text-bright text-glow-bright">[ok]</span> traced{' '}
              <span className="text-mid">alley-04/auth.ts</span> · 12 lines
            </div>
            <div>
              <span className="text-hot text-glow-hot">[!!]</span>{' '}
              <span className="text-ink">
                unknown signature on port 2049
              </span>
            </div>
            <div>
              <span className="text-bright text-glow-bright">$</span>{' '}
              <Cursor className="w-[8px] h-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
