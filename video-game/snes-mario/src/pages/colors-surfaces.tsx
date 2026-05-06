import { PreviewFrame } from '@/components/mario/preview-frame'

interface Surface {
  bg: string
  name: string
  hex: string
  hexColor?: string
}

const surfaces: Surface[] = [
  { bg: 'bg-sky', name: 'SKY', hex: '#9494FF' },
  { bg: 'bg-paper-warm', name: 'CREAM', hex: '#FCE0C0' },
  { bg: 'bg-brick', name: 'BRICK', hex: '#D85020', hexColor: 'text-paper-warm' },
  { bg: 'bg-night', name: 'NIGHT', hex: '#181830', hexColor: 'text-coin' },
]

export function ColorsSurfaces() {
  return (
    <PreviewFrame title="COLORS / SURFACES">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {surfaces.map((s) => (
            <div
              key={s.name}
              className={`${s.bg} h-[118px] relative overflow-hidden border-4 border-outline shadow-pixel`}
            >
              <div
                className={`absolute bottom-2 left-[10px] right-[10px] flex justify-between font-pixel text-[9px] ${
                  s.hexColor ?? 'text-ink'
                }`}
              >
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
