import { PreviewFrame } from '@/components/mario/preview-frame'

interface Accent {
  bg: string
  name: string
  hex: string
  textColor: string
}

const palette: Accent[] = [
  { bg: 'bg-mario-red', name: 'RED', hex: '#E02810', textColor: 'text-paper-warm' },
  { bg: 'bg-mario-brown', name: 'BROWN', hex: '#6C3018', textColor: 'text-paper-warm' },
  { bg: 'bg-hill-green', name: 'HILL', hex: '#00A800', textColor: 'text-paper-warm' },
  { bg: 'bg-coin', name: 'COIN', hex: '#FCC038', textColor: 'text-outline' },
  { bg: 'bg-block', name: 'BLOCK', hex: '#E89868', textColor: 'text-outline' },
]

interface Role {
  color: string
  name: string
  role: string
}

const roles: Role[] = [
  { color: 'text-mario-red', name: 'RED', role: '= MARIO · PRIMARY CTA' },
  { color: 'text-mario-brown', name: 'BROWN', role: '= OVERALLS · GROUND-TIE' },
  { color: 'text-hill-green', name: 'HILL', role: '= NAV · PIPE · SUCCESS' },
  { color: 'text-coin-deep', name: 'COIN', role: '= REWARD · SCORE' },
  { color: 'text-block-deep', name: 'BLOCK', role: '= ?-BLOCK · SURFACE CALLOUT' },
]

export function ColorsAccents() {
  return (
    <PreviewFrame title="COLORS / ACCENTS">
      <div className="p-7">
        <div className="font-pixel text-[10px] text-ink mt-1 mb-[10px] tracking-[0.06em]">
          // NES SPRITE PALETTE
        </div>
        <div className="grid grid-cols-5 gap-3">
          {palette.map((c) => (
            <div
              key={c.name}
              className={`${c.bg} h-[92px] relative p-[10px] flex items-end border-4 border-outline shadow-pixel`}
            >
              <div
                className={`w-full flex justify-between font-pixel text-[8px] ${c.textColor}`}
              >
                <span>{c.name}</span>
                <span>{c.hex}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="font-pixel text-[11px] leading-[1.9] text-ink bg-paper border-4 border-outline shadow-pixel px-4 py-[14px] mt-4">
          {roles.map((r) => (
            <div key={r.name}>
              <span className={r.color}>{r.name}</span> {r.role}
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}
