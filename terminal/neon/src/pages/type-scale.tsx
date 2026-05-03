import { PreviewFrame } from '@/components/terminal/preview-frame'

const rows = [
  {
    tag: 'Title',
    sample: 'Build in the open.',
    spec: '72 · inter 400',
    cls: 'text-[42px] font-normal tracking-[-0.02em] leading-none text-ink',
  },
  {
    tag: 'Subtitle',
    sample: 'A field guide for builders',
    spec: '48 · inter 400',
    cls: 'text-[28px] font-normal tracking-[-0.01em] text-ink',
  },
  {
    tag: 'Body',
    sample: 'The ceiling moved. you should too.',
    spec: '32 · inter 400',
    cls: 'text-[18px] text-ink-soft',
  },
  {
    tag: 'Small',
    sample: 'press space to continue',
    spec: '24 · mute',
    cls: 'text-[14px] text-mute',
  },
  {
    tag: 'Kicker',
    sample: '// 01 · WHO THIS IS FOR',
    spec: '20 · jb mono · 0.20em',
    cls: 'font-mono text-[12px] tracking-[0.2em] uppercase text-magenta text-glow-magenta',
  },
]

export function TypeScale() {
  return (
    <PreviewFrame title="type / scale">
      <div className="p-7">
        {rows.map((r, i) => (
          <div
            key={r.tag}
            className={`grid grid-cols-[90px_1fr_160px] items-baseline gap-4 py-2 ${i < rows.length - 1 ? 'border-b border-rule' : ''}`}
          >
            <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em]">
              {r.tag}
            </span>
            <span className={r.cls}>{r.sample}</span>
            <span className="font-mono text-[11px] text-mute text-right">
              {r.spec}
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
