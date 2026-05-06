import { PreviewFrame } from '@/components/mario/preview-frame'
import { Button } from '@/components/ui/button'

interface Row {
  tag: string
  buttons: {
    variant: 'primary' | 'pipe' | 'plaque' | 'coin' | 'block' | 'ghost'
    label: string
  }[]
}

const rows: Row[] = [
  {
    tag: 'PRIMARY',
    buttons: [
      { variant: 'primary', label: '▶ START' },
      { variant: 'primary', label: 'JUMP' },
    ],
  },
  {
    tag: 'PIPE',
    buttons: [
      { variant: 'pipe', label: '↓ WARP' },
      { variant: 'pipe', label: 'CONTINUE' },
    ],
  },
  {
    tag: 'PLAQUE',
    buttons: [{ variant: 'plaque', label: 'SUPER MARIO BROS.' }],
  },
  {
    tag: 'COIN',
    buttons: [{ variant: 'coin', label: '★ COLLECT' }],
  },
  {
    tag: '?-BLOCK',
    buttons: [{ variant: 'block', label: '? POWER-UP' }],
  },
  {
    tag: 'GHOST',
    buttons: [{ variant: 'ghost', label: 'CANCEL' }],
  },
]

export function ComponentsButtons() {
  return (
    <PreviewFrame title="COMPONENTS / BUTTONS">
      <div className="p-7 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.tag} className="flex gap-[14px] items-center flex-wrap">
            <span className="font-pixel text-[9px] text-ink min-w-[110px]">
              {row.tag}
            </span>
            {row.buttons.map((b, i) => (
              <Button key={i} variant={b.variant}>
                {b.label}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}
