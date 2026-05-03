import { PreviewFrame } from '@/components/arcade/preview-frame'

interface Surface {
  bg: string
  name: string
  hex: string
}

const surfaces: Surface[] = [
  { bg: 'bg-paper', name: 'PAPER', hex: '#0A0410' },
  { bg: 'bg-paper-dim', name: 'DIM', hex: '#14081E' },
  { bg: 'bg-cabinet', name: 'CABINET', hex: '#050208' },
  { bg: 'bg-felt', name: 'FELT', hex: '#1A0D28' },
]

export function ColorsSurfaces() {
  return (
    <PreviewFrame title="COLORS / SURFACES">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {surfaces.map((s) => (
            <div
              key={s.name}
              className={`${s.bg} h-[118px] relative overflow-hidden border-4 border-rule`}
            >
              <div className="absolute bottom-2 left-[10px] right-[10px] flex justify-between font-pixel text-[9px] text-magenta text-glow-magenta">
                <span>{s.name}</span>
                <span>{s.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
