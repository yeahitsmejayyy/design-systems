import { PreviewFrame } from '@/components/terminal/preview-frame'
import { cn } from '@/lib/utils'

interface Swatch {
  name: string
  hex: string
  bg: string
  text: 'black' | 'phosphor'
  glow?: 'bright' | 'mid' | 'soft'
}

const row1: Swatch[] = [
  { name: 'bright', hex: '#00ff41', bg: 'bg-bright', text: 'black', glow: 'bright' },
  { name: 'mid', hex: '#4cff7a', bg: 'bg-mid', text: 'black', glow: 'mid' },
  { name: 'soft', hex: '#128c2c', bg: 'bg-soft', text: 'black', glow: 'soft' },
  { name: 'warn', hex: '#8aff8a', bg: 'bg-warn', text: 'black' },
]

const row2: Swatch[] = [
  { name: 'bright-deep', hex: '#00d738', bg: 'bg-bright-deep', text: 'black' },
  { name: 'shadow', hex: '#0a3812', bg: 'bg-shadow', text: 'phosphor' },
  { name: 'error', hex: '#00ff41', bg: 'bg-error', text: 'black' },
  { name: 'rule', hex: '#133813', bg: 'bg-rule', text: 'phosphor' },
]

function SwatchTile({ s }: { s: Swatch }) {
  return (
    <div
      className={cn(
        s.bg,
        'h-[118px] rounded-sm relative overflow-hidden border border-bright/12 flex items-end p-3 box-border',
        s.glow === 'bright' && 'shadow-glow-bright',
        s.glow === 'mid' && 'shadow-glow-mid',
        s.glow === 'soft' && 'shadow-glow-soft'
      )}
    >
      <div
        className={cn(
          'w-full flex justify-between font-mono text-[11px]',
          s.text === 'black' ? 'text-black' : 'text-bright'
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
