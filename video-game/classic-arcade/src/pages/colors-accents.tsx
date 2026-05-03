import { PreviewFrame } from '@/components/arcade/preview-frame'

interface Accent {
  bg: string
  glow: string
  name: string
  hex: string
}

const palette: Accent[] = [
  { bg: 'bg-magenta', glow: 'shadow-glow-magenta', name: 'MAGENTA', hex: '#FF2E8A' },
  { bg: 'bg-cyan', glow: 'shadow-glow-cyan', name: 'CYAN', hex: '#00F0FF' },
  { bg: 'bg-yellow', glow: 'shadow-glow-yellow', name: 'YELLOW', hex: '#FFE93D' },
  { bg: 'bg-red', glow: 'shadow-glow-red', name: 'RED', hex: '#FF2222' },
  { bg: 'bg-green', glow: 'shadow-glow-green', name: 'GREEN', hex: '#2BFF7A' },
]

const roles = [
  { color: 'text-magenta text-glow-magenta', name: 'MAGENTA', role: 'PRIMARY · INSERT COIN' },
  { color: 'text-cyan text-glow-cyan', name: 'CYAN', role: 'SIGNAL · HI-SCORE' },
  { color: 'text-yellow text-glow-yellow', name: 'YELLOW', role: 'ENERGY · COMBO' },
  { color: 'text-red text-glow-red', name: 'RED', role: 'ALARM · GAME OVER' },
  { color: 'text-green text-glow-green', name: 'GREEN', role: '1UP · EXTRA LIFE' },
]

export function ColorsAccents() {
  return (
    <PreviewFrame title="COLORS / ACCENTS">
      <div className="p-7">
        <div className="font-pixel text-[10px] text-magenta text-glow-magenta mt-1 mb-2">
          // NEON PALETTE
        </div>
        <div className="grid grid-cols-5 gap-3">
          {palette.map((c) => (
            <div
              key={c.name}
              className={`${c.bg} ${c.glow} h-[92px] relative p-[10px] flex items-end`}
            >
              <div className="w-full flex justify-between font-pixel text-[8px] text-black">
                <span>{c.name}</span>
                <span>{c.hex}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="font-pixel text-[10px] text-mute mt-[18px] mb-2">// ROLES</div>
        <div className="font-pixel text-[11px] leading-[2] text-ink-soft">
          {roles.map((r) => (
            <div key={r.name}>
              <span className={r.color}>{r.name}</span> = {r.role}
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
