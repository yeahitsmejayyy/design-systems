import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Cursor } from '@/components/terminal/cursor'

export function ComponentsTerminal() {
  return (
    <PreviewFrame title="components / terminal">
      <div className="p-7">
        <div className="bg-term border border-rule rounded overflow-hidden">
          <div className="h-9 bg-black/50 flex items-center gap-2 pl-[14px] border-b border-rule">
            <span className="w-[11px] h-[11px] rounded-full bg-bright" />
            <span className="w-[11px] h-[11px] rounded-full bg-bright opacity-55" />
            <span className="w-[11px] h-[11px] rounded-full bg-bright opacity-25" />
            <span className="ml-4 font-mono text-[11px] text-mute">
              ~/static-terminal — zsh — 120×40
            </span>
          </div>
          <div className="px-5 py-[18px] font-mono text-[13px] leading-[1.7] text-ink-soft">
            <div>
              <span className="text-bright text-glow-bright">$</span> agent run
              --task "refactor auth"
            </div>
            <div className="text-mute">→ reading 14 files · 2 tools</div>
            <div>
              <span className="text-bright text-glow-bright">[ok]</span> edited{' '}
              <span className="text-mid">src/auth.ts</span> · 12 lines
            </div>
            <div>
              <span className="text-bright text-glow-bright">[ok]</span> ran
              tests · 47 passed
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
