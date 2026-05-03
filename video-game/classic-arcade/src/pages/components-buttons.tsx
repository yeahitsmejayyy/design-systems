import { PreviewFrame } from '@/components/arcade/preview-frame'
import { Button } from '@/components/ui/button'

interface Row {
  tag: string
  buttons: { variant: 'primary' | 'cyan' | 'yellow' | 'red' | 'ghost' | 'coin'; label: string }[]
}

const rows: Row[] = [
  {
    tag: 'PRIMARY',
    buttons: [
      { variant: 'primary', label: '▶ PLAY' },
      { variant: 'primary', label: 'CONTINUE' },
    ],
  },
  {
    tag: 'CYAN',
    buttons: [
      { variant: 'cyan', label: 'HI-SCORES' },
      { variant: 'cyan', label: 'SETTINGS' },
    ],
  },
  {
    tag: 'YELLOW',
    buttons: [{ variant: 'yellow', label: '★ COMBO' }],
  },
  {
    tag: 'RED · ALARM',
    buttons: [{ variant: 'red', label: 'QUIT' }],
  },
  {
    tag: 'GHOST',
    buttons: [{ variant: 'ghost', label: 'CANCEL' }],
  },
  {
    tag: 'COIN · FLASH',
    buttons: [{ variant: 'coin', label: 'INSERT COIN' }],
  },
]

export function ComponentsButtons() {
  return (
    <PreviewFrame title="COMPONENTS / BUTTONS">
      <div className="p-7 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.tag} className="flex gap-[14px] items-center flex-wrap">
            <span className="font-pixel text-[9px] text-mute min-w-[110px]">
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
