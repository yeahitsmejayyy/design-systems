import { PreviewFrame } from '@/components/terminal/preview-frame'

const surfaces = [
  { name: 'paper', hex: '#000000', bg: 'bg-paper' },
  { name: 'paper-dim', hex: '#050805', bg: 'bg-paper-dim' },
  { name: 'term', hex: '#000000', bg: 'bg-term' },
  { name: 'term-paper', hex: '#0a0f0a', bg: 'bg-term-paper' },
]

export function ColorsSurfaces() {
  return (
    <PreviewFrame title="colors / surfaces">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {surfaces.map((s) => (
            <div
              key={s.name}
              className={`${s.bg} h-[118px] rounded-sm relative overflow-hidden border border-rule`}
            >
              <div
                className="absolute bottom-2 left-[10px] right-[10px] flex justify-between items-baseline font-mono text-[11px] text-bright"
              >
                <span className="font-medium tracking-[0.08em] uppercase">
                  {s.name}
                </span>
                <span>{s.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
