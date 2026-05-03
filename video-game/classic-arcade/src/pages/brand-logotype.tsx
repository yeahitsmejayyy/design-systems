import { PreviewFrame } from '@/components/arcade/preview-frame'
import { BgWash } from '@/components/arcade/bg-wash'

export function BrandLogotype() {
  return (
    <PreviewFrame title="BRAND / LOGOTYPE" fullBleed>
      <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
        <BgWash variant="small" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <div className="font-pixel text-[28px] text-magenta animate-marquee-pulse tracking-[0.04em]">
            ★ CLASSIC ARCADE ★
          </div>
          <div className="font-pixel text-[11px] text-yellow text-glow-yellow animate-flash tracking-[0.15em]">
            ▶ INSERT COIN
          </div>
          <div className="flex gap-2 mt-1">
            <div className="w-[10px] h-[10px] rounded-full bg-yellow shadow-glow-yellow" />
            <div className="w-[10px] h-[10px] rounded-full bg-yellow shadow-glow-yellow opacity-50" />
            <div className="w-[10px] h-[10px] rounded-full bg-yellow shadow-glow-yellow opacity-25" />
          </div>
        </div>
        <div className="ar-scanlines" />
      </div>
    </PreviewFrame>
  )
}
