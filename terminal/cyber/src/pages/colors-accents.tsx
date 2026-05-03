import { PreviewFrame } from '@/components/terminal/preview-frame'
import { cn } from '@/lib/utils'

interface Swatch {
  name: string
  hex: string
  bg: string
  text: 'black' | 'cyan' | 'white'
  glow?: 'bright' | 'hot'
}

const cyanLadder: Swatch[] = [
  { name: 'bright', hex: '#00e7ff', bg: 'bg-bright', text: 'black', glow: 'bright' },
  { name: 'bright-deep', hex: '#00b8d4', bg: 'bg-bright-deep', text: 'black' },
  { name: 'mid', hex: '#4dd0ff', bg: 'bg-mid', text: 'black' },
  { name: 'soft', hex: '#1e6f8e', bg: 'bg-soft', text: 'white' },
]

const hotLadder: Swatch[] = [
  { name: 'hot', hex: '#ff2d8f', bg: 'bg-hot', text: 'black', glow: 'hot' },
  { name: 'hot-deep', hex: '#d61f73', bg: 'bg-hot-deep', text: 'black' },
  { name: 'hot-soft', hex: '#ff6fb0', bg: 'bg-hot-soft', text: 'black' },
  { name: 'shadow', hex: '#0a2840', bg: 'bg-shadow', text: 'cyan' },
]

function SwatchTile({ s }: { s: Swatch }) {
  return (
    <div
      className={cn(
        s.bg,
        'h-[100px] rounded-sm relative overflow-hidden flex items-end p-3 box-border',
        s.glow === 'bright' && 'shadow-glow-bright',
        s.glow === 'hot' && 'shadow-glow-hot'
      )}
    >
      <div
        className={cn(
          'w-full flex justify-between font-mono text-[11px]',
          s.text === 'black' && 'text-black',
          s.text === 'white' && 'text-white',
          s.text === 'cyan' && 'text-bright text-glow-bright'
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
        <div className="font-mono text-[10px] text-mute tracking-[0.2em] uppercase mt-1 mb-2">
          // cyan ladder — primary signal
        </div>
        <div className="grid grid-cols-4 gap-[14px]">
          {cyanLadder.map((s) => (
            <SwatchTile key={s.name} s={s} />
          ))}
        </div>

        <div className="font-mono text-[10px] text-hot text-glow-hot tracking-[0.2em] uppercase mt-5 mb-2">
          // hot — rare. one per surface.
        </div>
        <div className="grid grid-cols-4 gap-[14px]">
          {hotLadder.map((s) => (
            <SwatchTile key={s.name} s={s} />
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
