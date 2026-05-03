import { PreviewFrame } from '@/components/arcade/preview-frame'

interface Row {
  tag: string
  className: string
  content: string
  spec: string
}

const rows: Row[] = [
  {
    tag: 'MARQUEE',
    className: 'font-pixel text-[32px] text-magenta text-glow-magenta',
    content: 'PLAYER ONE',
    spec: '96 · PIXEL',
  },
  {
    tag: 'TITLE',
    className: 'font-pixel text-[22px] text-cyan text-glow-cyan',
    content: 'HIGH SCORES',
    spec: '48 · PIXEL',
  },
  {
    tag: 'H3',
    className: 'font-pixel text-[14px] text-yellow text-glow-yellow',
    content: 'WORLD 1-1',
    spec: '18 · PIXEL',
  },
  {
    tag: 'BODY',
    className: 'font-sans text-[18px] text-ink-soft',
    content: 'Insert one coin to begin your adventure.',
    spec: '18 · INTER',
  },
  {
    tag: 'SMALL',
    className: 'font-sans text-[14px] text-mute',
    content: '© 1985 · all rights reserved',
    spec: '14 · INTER',
  },
  {
    tag: 'HUD',
    className: 'font-pixel text-[11px] text-cyan text-glow-cyan tracking-[0.08em]',
    content: 'SCORE · 042,650',
    spec: '11 · PIXEL',
  },
]

export function TypeScale() {
  return (
    <PreviewFrame title="TYPE / SCALE">
      <div className="p-7">
        {rows.map((r, idx) => (
          <div
            key={r.tag}
            className={`grid grid-cols-[110px_1fr_150px] items-baseline gap-[14px] py-[10px] ${
              idx < rows.length - 1 ? 'border-b border-dashed border-rule' : ''
            }`}
          >
            <span className="font-pixel text-[9px] text-mute">{r.tag}</span>
            <span className={r.className}>{r.content}</span>
            <span className="font-pixel text-[9px] text-mute text-right">
              {r.spec}
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
