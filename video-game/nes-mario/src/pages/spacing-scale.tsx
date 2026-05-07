import { PreviewFrame } from '@/components/mario/preview-frame'

interface Step {
  tag: string
  width: number
  val: string
}

const steps: Step[] = [
  { tag: 'SPACE-1', width: 4, val: '4PX' },
  { tag: 'SPACE-2', width: 8, val: '8PX · TILE' },
  { tag: 'SPACE-3', width: 16, val: '16PX · SPRITE' },
  { tag: 'SPACE-4', width: 24, val: '24PX' },
  { tag: 'SPACE-5', width: 32, val: '32PX' },
  { tag: 'SPACE-6', width: 48, val: '48PX' },
  { tag: 'SPACE-7', width: 64, val: '64PX' },
  { tag: 'SPACE-8', width: 96, val: '96PX' },
]

export function SpacingScale() {
  return (
    <PreviewFrame title="SPACING / SCALE" bg="paper">
      <div className="p-7">
        <div className="font-pixel text-[10px] text-mute mb-[14px]">
          // 8PX BASELINE — NES TILE = 8PX, SPRITE = 16PX
        </div>
        {steps.map((s, idx) => (
          <div
            key={s.tag}
            className={`grid grid-cols-[100px_1fr_110px] items-center gap-[14px] py-[6px] ${
              idx < steps.length - 1 ? 'border-b border-dashed border-rule' : ''
            }`}
          >
            <span className="font-pixel text-[9px] text-mute">{s.tag}</span>
            <div
              className="h-[14px] bg-brick border-2 border-outline"
              style={{
                width: `${s.width}px`,
                boxShadow: 'inset 0 -3px 0 var(--color-brick-deep)',
              }}
            />
            <span className="font-pixel text-[9px] text-hill-green text-right">
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
