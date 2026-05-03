import { PreviewFrame } from '@/components/arcade/preview-frame'

interface Ink {
  textClass?: string
  name: string
  hex: string
  isRule?: boolean
}

const inks: Ink[] = [
  { textClass: 'text-ink', name: 'INK', hex: '#FFFFFF' },
  { textClass: 'text-ink-soft', name: 'SOFT', hex: '#C4B8D8' },
  { textClass: 'text-mute', name: 'MUTE', hex: '#6A5786' },
  { name: 'RULE', hex: '#2A1842', isRule: true },
]

export function ColorsInk() {
  return (
    <PreviewFrame title="COLORS / INK">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {inks.map((i) => (
            <div
              key={i.name}
              className="h-[118px] bg-paper-dim border-4 border-rule p-[14px] flex flex-col justify-between"
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
