import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Cursor } from '@/components/terminal/cursor'

export function TypeMono() {
  return (
    <PreviewFrame title="type / mono">
      <div className="p-7">
        <div className="bg-term border border-rule rounded-sm p-5 font-mono text-[14px] leading-[1.7]">
          <div>
            <span className="text-bright text-glow-bright">$</span>{' '}
            <span className="text-ink-soft">welcome --era=static</span>
          </div>
          <div>
            <span className="text-mute">// kicker · 01 / who this is for</span>
          </div>
          <div>
            <span className="text-mid">{'>'}</span>{' '}
            <span className="text-ink">the signal is silence.</span>
            <Cursor className="w-[9px] h-[16px] ml-[2px]" />
          </div>
          <div>
            <span className="text-bright text-glow-bright">[ok]</span>{' '}
            <span className="text-ink-soft">compile · 124ms</span>
          </div>
        </div>
        <div className="font-mono text-[11px] text-mute uppercase tracking-[0.16em] mt-[14px]">
          jetbrains mono · 14px · 1.7 line-height · 0.05em tracking
        </div>
      </div>
    </PreviewFrame>
  )
}
