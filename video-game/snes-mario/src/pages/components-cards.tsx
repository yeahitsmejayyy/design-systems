import { PreviewFrame } from '@/components/mario/preview-frame'

export function ComponentsCards() {
  return (
    <PreviewFrame title="COMPONENTS / CARDS">
      <div className="p-7 grid grid-cols-2 gap-[18px]">
        {/* Paper card */}
        <div className="bg-paper border-4 border-outline shadow-pixel p-5 flex flex-col gap-[10px]">
          <span className="font-pixel text-[10px] text-mario-red">// 01</span>
          <span className="font-pixel text-[16px] text-hill-green">
            PAPER CARD
          </span>
          <span className="text-[14px] text-ink-soft leading-[1.5] font-sans">
            Pixel border on white paper, hard offset shadow. Pixel kicker, pixel
            title, sans body.
          </span>
        </div>

        {/* Plaque card */}
        <div className="relative bg-brick border-4 border-outline shadow-pixel px-6 py-5 text-paper-warm font-pixel text-shadow-pixel-sm">
          <span className="absolute top-[5px] left-[5px] w-[5px] h-[5px] bg-outline" />
          <span className="absolute top-[5px] right-[5px] w-[5px] h-[5px] bg-outline" />
          <span className="absolute bottom-[5px] left-[5px] w-[5px] h-[5px] bg-outline" />
          <span className="absolute bottom-[5px] right-[5px] w-[5px] h-[5px] bg-outline" />
          <div className="text-[12px]">02 · PLAQUE</div>
          <div className="text-[22px] mt-[6px]">SUPER MARIO</div>
          <div className="text-[9px] mt-3 text-coin tracking-[0.1em] [text-shadow:none]">
            CREAM-ON-BRICK · 4 RIVETS
          </div>
        </div>

        {/* ?-block card */}
        <div
          className="bg-block border-4 border-outline p-6 text-center"
          style={{
            boxShadow:
              'inset -6px -6px 0 var(--color-block-deep), 6px 6px 0 var(--color-outline)',
          }}
        >
          <div className="font-pixel text-[56px] text-ink animate-block-bump leading-none">
            ?
          </div>
          <div className="font-pixel text-[10px] text-ink mt-2">
            HIT FOR POWER-UP
          </div>
        </div>

        {/* Pipe card */}
        <div
          className="bg-hill-green border-4 border-outline shadow-pixel px-5 py-[18px] text-paper-warm"
          style={{
            boxShadow:
              'inset 6px 0 0 var(--color-pipe-light), inset -6px 0 0 var(--color-pipe-dark), 4px 4px 0 var(--color-outline)',
          }}
        >
          <div className="font-pixel text-[10px] text-coin mb-2 text-shadow-pixel-sm">
            ↓ WARP ZONE
          </div>
          <div className="font-pixel text-[13px] leading-[1.7] text-shadow-pixel-sm">
            WORLD 4-2 → 8-1
            <br />
            SHORTCUT UNLOCKED
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
