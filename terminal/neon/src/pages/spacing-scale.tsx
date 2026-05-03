import { PreviewFrame } from '@/components/terminal/preview-frame'

const rows = [
  { tag: 'space-1', size: 4 },
  { tag: 'space-2', size: 8 },
  { tag: 'space-3', size: 16 },
  { tag: 'space-4', size: 24 },
  { tag: 'space-5', size: 32 },
  { tag: 'space-6', size: 48 },
  { tag: 'space-7', size: 64 },
  { tag: 'space-8', size: 96 },
]

export function SpacingScale() {
  return (
    <PreviewFrame title="spacing / scale">
      <div className="p-7">
        {rows.map((r) => (
          <div
            key={r.tag}
            className="grid grid-cols-[80px_1fr_90px] items-center gap-4 py-[6px] border-b border-rule"
          >
            <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em]">
              {r.tag}
            </span>
            <div
              className="h-[10px]"
              style={{
                width: `${r.size}px`,
                background:
                  'linear-gradient(90deg, var(--color-magenta), var(--color-cyan))',
              }}
            />
            <span className="font-mono text-[11px] text-mute text-right">
              {r.size}px
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
