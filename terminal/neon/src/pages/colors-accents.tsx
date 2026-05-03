import { PreviewFrame } from '@/components/terminal/preview-frame'
import { cn } from '@/lib/utils'

interface Swatch {
  name: string
  hex: string
  bg: string
  text: 'black' | 'white'
  glow?: 'magenta' | 'cyan' | 'lime'
}

const row1: Swatch[] = [
  { name: 'magenta', hex: '#ff2d78', bg: 'bg-magenta', text: 'white', glow: 'magenta' },
  { name: 'cyan', hex: '#22e4ff', bg: 'bg-cyan', text: 'black', glow: 'cyan' },
  { name: 'lime', hex: '#a8ff3e', bg: 'bg-lime', text: 'black', glow: 'lime' },
  { name: 'amber', hex: '#ffb347', bg: 'bg-amber', text: 'black' },
]

const row2: Swatch[] = [
  { name: 'magenta-deep', hex: '#c91e5e', bg: 'bg-magenta-deep', text: 'white' },
  { name: 'violet', hex: '#6b2bb8', bg: 'bg-violet', text: 'white' },
  { name: 'red', hex: '#ff3355', bg: 'bg-red', text: 'white' },
  { name: 'rule', hex: '#3d1f4d', bg: 'bg-rule', text: 'white' },
]

function SwatchTile({ s }: { s: Swatch }) {
  return (
    <div
      className={cn(
        s.bg,
        'h-[118px] rounded-sm relative overflow-hidden border border-white/8 flex items-end p-3 box-border',
        s.glow === 'magenta' && 'shadow-glow-magenta',
        s.glow === 'cyan' && 'shadow-glow-cyan',
        s.glow === 'lime' && 'shadow-glow-lime'
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
