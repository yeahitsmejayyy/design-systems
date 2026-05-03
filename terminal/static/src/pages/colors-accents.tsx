import { PreviewFrame } from '@/components/terminal/preview-frame'
import { cn } from '@/lib/utils'

interface Swatch {
  name: string
  hex: string
  bg: string
  text: 'black' | 'white'
  glow?: boolean
}

const row1: Swatch[] = [
  { name: 'bright', hex: '#ffffff', bg: 'bg-bright', text: 'black', glow: true },
  { name: 'mid', hex: '#9a9aa2', bg: 'bg-mid', text: 'black' },
  { name: 'soft', hex: '#5a5a62', bg: 'bg-soft', text: 'white' },
  { name: 'warn', hex: '#b8b8be', bg: 'bg-warn', text: 'black' },
]

const row2: Swatch[] = [
  { name: 'bright-deep', hex: '#e2e2e6', bg: 'bg-bright-deep', text: 'black' },
  { name: 'shadow', hex: '#2f2f36', bg: 'bg-shadow', text: 'white' },
  { name: 'error', hex: '#d8d8dc', bg: 'bg-error', text: 'black' },
  { name: 'rule', hex: '#2a2a30', bg: 'bg-rule', text: 'white' },
]

function SwatchTile({ s }: { s: Swatch }) {
  return (
    <div
      className={cn(
        s.bg,
        'h-[118px] rounded-sm relative overflow-hidden border border-white/8 flex items-end p-3 box-border',
        s.glow && 'shadow-glow-bright'
      )}
    >
      <div
        className={cn(
          'w-full flex justify-between font-mono text-[11px]',
          s.text === 'black' ? 'text-black' : 'text-white'
        )}
      >
        <span className="font-semibold tracking-[0.08em] uppercase">
          {s.name}
        </span>
        <span>{s.hex}</span>
      </div>
    </div>
  )
}

export function ColorsAccents() {
  return (
    <PreviewFrame title="colors / accents">
      <div className="p-7">
        <div className="grid grid-cols-4 gap-[14px]">
          {row1.map((s) => (
            <SwatchTile key={s.name} s={s} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-[14px] mt-[14px]">
          {row2.map((s) => (
            <SwatchTile key={s.name} s={s} />
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
