import { PreviewFrame } from '@/components/mario/preview-frame'
import { Clouds } from '@/components/mario/clouds'
import { Plaque } from '@/components/mario/plaque'

export function BrandLogotype() {
  return (
    <PreviewFrame title="BRAND / LOGOTYPE" fullBleed>
      <div className="relative h-[280px] flex items-center justify-center overflow-hidden bg-sky">
        <Clouds />
        <Plaque size="lg" className="relative z-10 text-center">
          <div className="text-[22px]">SUPER</div>
          <div className="text-[36px] mt-2">MARIO BROS.</div>
        </Plaque>
      </div>
    </PreviewFrame>
  )
}
