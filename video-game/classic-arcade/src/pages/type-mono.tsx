import { PreviewFrame } from '@/components/arcade/preview-frame'

export function TypeMono() {
  return (
    <PreviewFrame title="TYPE / MONO">
      <div className="p-7">
        <div className="bg-cabinet border-4 border-rule px-[22px] py-[18px] font-pixel text-[14px] leading-[1.9]">
          <div className="flex justify-between gap-6">
            <span className="text-magenta text-glow-magenta">1ST</span>
            <span className="text-cyan text-glow-cyan">AAA</span>
            <span className="text-yellow text-glow-yellow">999,999</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-magenta text-glow-magenta">2ND</span>
            <span className="text-cyan text-glow-cyan">JAY</span>
            <span className="text-yellow text-glow-yellow">042,650</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-magenta text-glow-magenta">3RD</span>
            <span className="text-cyan text-glow-cyan">CPU</span>
            <span className="text-yellow text-glow-yellow">001,200</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-green text-glow-green">1UP</span>
            <span className="text-ink-soft">EXTRA LIFE</span>
            <span className="text-green text-glow-green">+1</span>
          </div>
        </div>
        <div className="font-pixel text-[9px] text-mute mt-[14px]">
          PRESS START 2P · SCOREBOARD · ALL CAPS · NEON ROLES
        </div>
      </div>
    </PreviewFrame>
  )
}
