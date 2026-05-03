import { PreviewFrame } from '@/components/terminal/preview-frame'

const inks = [
  { name: 'ink', hex: '#f4f4f6', cls: 'text-ink', divider: false },
  { name: 'ink-soft', hex: '#c8c8cd', cls: 'text-ink-soft', divider: false },
  { name: 'mute', hex: '#75757d', cls: 'text-mute', divider: false },
  { name: 'rule', hex: '#2a2a30', cls: 'text-rule', divider: true },
]

export function ColorsInk() {
  return (
    <PreviewFrame title="colors / ink">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {inks.map((s) => (
            <div
              key={s.name}
              className="h-[118px] rounded-sm border border-rule bg-paper-dim flex flex-col justify-between px-[14px] pt-[14px] pb-[10px]"
            >
              <span
                className={`text-[22px] font-medium tracking-[-0.01em] ${s.cls} ${s.divider ? 'border-t border-rule pt-[10px]' : ''}`}
              >
                {s.divider ? '— — — — —' : 'Aa Bb 42'}
              </span>
              <span className="font-mono text-[11px] text-mute flex justify-between">
                <span className="uppercase tracking-[0.12em]">{s.name}</span>
                <span>{s.hex}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
