import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Cursor } from '@/components/terminal/cursor'

export function ComponentsTerminal() {
  return (
    <PreviewFrame title="components / terminal">
      <div className="p-7">
        <div className="bg-term border border-rule rounded overflow-hidden">
          <div className="h-9 bg-black/50 flex items-center gap-2 pl-[14px] border-b border-rule">
            <span className="w-[11px] h-[11px] rounded-full bg-magenta shadow-glow-magenta" />
            <span className="w-[11px] h-[11px] rounded-full bg-amber" />
            <span className="w-[11px] h-[11px] rounded-full bg-lime shadow-glow-lime" />
            <span className="ml-4 font-mono text-[11px] text-mute">
              ~/neon-terminal — zsh — 120×40
            </span>
          </div>
          <div className="px-5 py-[18px] font-mono text-[13px] leading-[1.7] text-ink-soft">
            <div>
              <span className="text-magenta text-glow-magenta">$</span> agent
              run --task "refactor auth"
            </div>
            <div className="text-mute">→ reading 14 files · 2 tools</div>
            <div>
              <span className="text-lime text-glow-lime">[ok]</span> edited{' '}
              <span className="text-cyan">src/auth.ts</span> · 12 lines
            </div>
            <div>
              <span className="text-lime text-glow-lime">[ok]</span> ran tests ·
              47 passed
            </div>
            <div>
              <span className="text-magenta text-glow-magenta">$</span>{' '}
              <Cursor className="w-[8px] h-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
