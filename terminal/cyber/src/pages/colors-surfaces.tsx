import { PreviewFrame } from '@/components/terminal/preview-frame'

const surfaces = [
  { name: 'paper', hex: '#060c1a', bg: 'bg-paper' },
  { name: 'paper-dim', hex: '#0a1428', bg: 'bg-paper-dim' },
  { name: 'term', hex: '#020610', bg: 'bg-term' },
  { name: 'term-paper', hex: '#0c1830', bg: 'bg-term-paper' },
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
              <div className="absolute bottom-2 left-[10px] right-[10px] flex justify-between items-baseline font-mono text-[11px] text-bright text-glow-bright">
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
