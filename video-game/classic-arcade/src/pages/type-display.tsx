import { PreviewFrame } from '@/components/arcade/preview-frame'

export function TypeDisplay() {
  return (
    <PreviewFrame title="TYPE / DISPLAY">
      <div className="p-9 relative overflow-hidden">
        <div className="font-pixel text-[56px] leading-[1.15] tracking-[0.02em] text-magenta animate-marquee-pulse text-marquee-pulse">
          ARCADE
        </div>
        <div className="font-pixel text-[10px] text-mute mt-4 tracking-[0.08em]">
          PRESS START 2P · 96PX · MAGENTA · MARQUEE PULSE 1.6S
        </div>
        <div className="ar-scanlines" />
      </div>
    </PreviewFrame>
  )
}
