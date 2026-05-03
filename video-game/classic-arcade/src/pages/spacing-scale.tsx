import { PreviewFrame } from '@/components/arcade/preview-frame'

const steps = [
  { tag: 'SPACE-1', width: 4, val: '4PX' },
  { tag: 'SPACE-2', width: 8, val: '8PX' },
  { tag: 'SPACE-3', width: 16, val: '16PX' },
  { tag: 'SPACE-4', width: 24, val: '24PX' },
  { tag: 'SPACE-5', width: 32, val: '32PX' },
  { tag: 'SPACE-6', width: 48, val: '48PX' },
  { tag: 'SPACE-7', width: 64, val: '64PX' },
  { tag: 'SPACE-8', width: 96, val: '96PX' },
]

export function SpacingScale() {
  return (
    <PreviewFrame title="SPACING / SCALE">
      <div className="p-7">
        {steps.map((s, idx) => (
          <div
            key={s.tag}
            className={`grid grid-cols-[100px_1fr_90px] items-center gap-[14px] py-[6px] ${
              idx < steps.length - 1 ? 'border-b border-dashed border-rule' : ''
            }`}
          >
            <span className="font-pixel text-[9px] text-mute">{s.tag}</span>
            <div
              style={{
                width: `${s.width}px`,
                height: '12px',
                background: 'linear-gradient(90deg, var(--color-magenta), var(--color-cyan))',
                boxShadow: '0 0 8px rgba(255,46,138,0.4)',
              }}
            />
            <span className="font-pixel text-[9px] text-yellow text-glow-yellow text-right">
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
