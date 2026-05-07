import type { ReactElement } from 'react'
import { PreviewFrame } from '@/components/mario/preview-frame'

interface Row {
  tag: string
  spec: string
  render: () => ReactElement
}

const rows: Row[] = [
  {
    tag: 'PLAQUE',
    spec: '28 · PIXEL',
    render: () => (
      <span className="inline-block font-pixel text-[28px] text-paper-warm text-shadow-pixel bg-brick border-[3px] border-outline px-3 py-1">
        MARIO BROS.
      </span>
    ),
  },
  {
    tag: 'TITLE',
    spec: '22 · PIXEL',
    render: () => (
      <span className="font-pixel text-[22px] text-mario-red text-shadow-pixel-sm">
        WORLD 1-1
      </span>
    ),
  },
  {
    tag: 'H3',
    spec: '14 · PIXEL',
    render: () => (
      <span className="font-pixel text-[14px] text-hill-green">×3 LIVES</span>
    ),
  },
  {
    tag: 'BODY',
    spec: '18 · INTER',
    render: () => (
      <span className="font-sans text-[18px] text-ink-soft">
        Run, jump, stomp goombas. The plumber's playbook.
      </span>
    ),
  },
  {
    tag: 'SMALL',
    spec: '14 · INTER',
    render: () => (
      <span className="font-sans text-[14px] text-mute">
        © 1985 nintendo · all rights reserved
      </span>
    ),
  },
  {
    tag: 'HUD',
    spec: '11 · PIXEL',
    render: () => (
      <span className="font-pixel text-[11px] text-ink tracking-[0.08em]">
        MARIO · 042650 · ×8 · 1-1 · TIME 286
      </span>
    ),
  },
]

export function TypeScale() {
  return (
    <PreviewFrame title="TYPE / SCALE" bg="paper">
      <div className="p-7">
        {rows.map((r, idx) => (
          <div
            key={r.tag}
            className={`grid grid-cols-[110px_1fr_150px] items-baseline gap-[14px] py-[10px] ${
              idx < rows.length - 1 ? 'border-b border-dashed border-rule' : ''
            }`}
          >
            <span className="font-pixel text-[9px] text-mute">{r.tag}</span>
            <span>{r.render()}</span>
            <span className="font-pixel text-[9px] text-mute text-right">
              {r.spec}
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
