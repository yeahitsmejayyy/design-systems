import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Button } from '@/components/ui/button'

const rows: { tag: string; buttons: { variant: 'primary' | 'secondary' | 'ghost' | 'terminal'; label: string }[] }[] = [
  {
    tag: 'primary',
    buttons: [
      { variant: 'primary', label: 'Run agent' },
      { variant: 'primary', label: '→ Start' },
    ],
  },
  {
    tag: 'secondary',
    buttons: [
      { variant: 'secondary', label: 'Preview' },
      { variant: 'secondary', label: 'Copy link' },
    ],
  },
  {
    tag: 'ghost',
    buttons: [
      { variant: 'ghost', label: 'Cancel' },
      { variant: 'ghost', label: 'Settings' },
    ],
  },
  {
    tag: 'terminal',
    buttons: [{ variant: 'terminal', label: 'deploy --prod' }],
  },
]

export function ComponentsButtons() {
  return (
    <PreviewFrame title="components / buttons">
      <div className="p-7 flex flex-col gap-[18px]">
        {rows.map((r) => (
          <div key={r.tag} className="flex gap-[14px] items-center flex-wrap">
            <span className="font-mono text-[11px] text-mute uppercase tracking-[0.14em] min-w-[90px]">
              {r.tag}
            </span>
            {r.buttons.map((b, i) => (
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
