import { PreviewFrame } from '@/components/mario/preview-frame'

interface Ink {
  textClass?: string
  name: string
  hex: string
  isRule?: boolean
}

const inks: Ink[] = [
  { textClass: 'text-ink', name: 'INK', hex: '#000' },
  { textClass: 'text-ink-soft', name: 'SOFT', hex: '#2A2A40' },
  { textClass: 'text-mute', name: 'MUTE', hex: '#5A5A78' },
  { name: 'RULE', hex: '#C0C0D0', isRule: true },
]

export function ColorsInk() {
  return (
    <PreviewFrame title="COLORS / INK" bg="paper-warm">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {inks.map((i) => (
            <div
              key={i.name}
              className="h-[118px] bg-paper border-4 border-outline shadow-pixel p-[14px] flex flex-col justify-between"
            >
              {i.isRule ? (
                <span className="font-pixel text-[18px] text-rule border-t-2 border-dashed border-rule pt-[10px]">
                  — —
                </span>
              ) : (
                <span className={`font-pixel text-[18px] ${i.textClass}`}>
                  AB 42
                </span>
              )}
              <span className="font-pixel text-[9px] text-mute flex justify-between">
                <span>{i.name}</span>
                <span>{i.hex}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
