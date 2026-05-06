import { PreviewFrame } from '@/components/mario/preview-frame'

export function TypeMono() {
  return (
    <PreviewFrame title="TYPE / MONO">
      <div className="p-7">
        <div className="bg-ink border-4 border-outline shadow-pixel px-[18px] py-[14px] font-pixel text-[12px] leading-[2] text-paper">
          <div className="grid grid-cols-4 gap-[18px]">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-paper">MARIO</span>
              <span className="text-[13px] text-coin">042650</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-paper">●×</span>
              <span className="text-[13px] text-coin">08</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-paper">WORLD</span>
              <span className="text-[13px] text-coin">1-1</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-paper">TIME</span>
              <span className="text-[13px] text-coin">286</span>
            </div>
          </div>
        </div>
        <div className="font-pixel text-[9px] text-ink mt-[14px] tracking-[0.08em]">
          SMB1 HUD · BLACK BAR · WHITE LABELS · GOLD VALUES
        </div>
      </div>
    </PreviewFrame>
  )
}
