import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Cursor } from '@/components/terminal/cursor'

export function TypeMono() {
  return (
    <PreviewFrame title="type / mono">
      <div className="p-7">
        <div className="bg-term border border-rule rounded-sm p-5 font-mono text-[14px] leading-[1.7]">
          <div>
            <span className="text-bright text-glow-bright">$</span>{' '}
            <span className="text-ink-soft">connect --district=neon</span>
          </div>
          <div>
            <span className="text-mute">// signal locked · 124ms</span>
          </div>
          <div>
            <span className="text-mid">{'>'}</span>{' '}
            <span className="text-ink">welcome to the back alley.</span>
            <Cursor className="w-[9px] h-[16px] ml-[2px]" />
          </div>
          <div>
            <span className="text-bright text-glow-bright">[ok]</span>{' '}
            <span className="text-ink-soft">handshake clean</span>{' '}
            <span className="text-hot text-glow-hot">
              [!!] 1 ghost detected
            </span>
          </div>
        </div>
        <div className="font-mono text-[11px] text-mute uppercase tracking-[0.16em] mt-[14px]">
          jetbrains mono · 14px · 1.7 line-height · cyan signal · pink alarm
        </div>
      </div>
    </PreviewFrame>
  )
}
