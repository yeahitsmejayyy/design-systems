import { PreviewFrame } from '@/components/arcade/preview-frame'

const orbs = [
  { bg: 'bg-magenta', glow: 'shadow-glow-magenta' },
  { bg: 'bg-cyan', glow: 'shadow-glow-cyan' },
  { bg: 'bg-yellow', glow: 'shadow-glow-yellow' },
  { bg: 'bg-red', glow: 'shadow-glow-red' },
  { bg: 'bg-green', glow: 'shadow-glow-green' },
]

export function EffectsGlow() {
  return (
    <PreviewFrame title="EFFECTS / GLOW" bg="cabinet">
      <div className="p-7 flex flex-col gap-[22px]">
        <div className="flex gap-[14px] items-center">
          {orbs.map((o, i) => (
            <div
              key={i}
              className={`w-12 h-12 rounded-full ${o.bg} ${o.glow}`}
            />
          ))}
          <span className="font-pixel text-[9px] text-mute min-w-[220px] ml-2">
            FIVE-COLOR HALOS
          </span>
        </div>

        <div className="flex gap-[14px] items-center">
          <span className="font-pixel text-[32px] text-magenta text-glow-magenta animate-marquee-pulse">
            PULSE
          </span>
          <span className="font-pixel text-[9px] text-mute min-w-[220px]">
            MARQUEE-PULSE 1.6S
          </span>
        </div>

        <div className="flex gap-[14px] items-center">
          <span className="font-pixel text-[32px] text-yellow text-glow-yellow animate-flash">
            PRESS START
          </span>
          <span className="font-pixel text-[9px] text-mute min-w-[220px]">
            FLASH 1.2S · STEPS(2)
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
