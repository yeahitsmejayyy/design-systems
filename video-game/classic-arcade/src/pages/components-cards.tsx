import { PreviewFrame } from '@/components/arcade/preview-frame'

export function ComponentsCards() {
  return (
    <PreviewFrame title="COMPONENTS / CARDS">
      <div className="p-7 grid grid-cols-2 gap-[14px]">
        <div className="bg-paper-dim border-4 border-rule p-5 flex flex-col gap-[10px]">
          <span className="font-pixel text-[10px] text-magenta text-glow-magenta">
            // 01
          </span>
          <span className="font-pixel text-[16px] text-cyan text-glow-cyan">
            DEFAULT CARD
          </span>
          <span className="text-[14px] text-ink-soft leading-[1.5] font-sans">
            Hard pixel border on a paper-dim surface. Pixel kicker, pixel title,
            sans body.
          </span>
        </div>

        <div className="bg-cabinet border-4 border-yellow shadow-glow-yellow p-5">
          <div className="font-pixel text-[36px] text-yellow text-glow-yellow leading-none">
            042,650
          </div>
          <div className="font-pixel text-[10px] text-ink-soft mt-2">
            CURRENT SCORE
          </div>
        </div>

        <div className="bg-cabinet border-4 border-magenta shadow-glow-magenta px-5 py-[18px] flex justify-between items-center">
          <span className="font-pixel text-[11px] text-magenta text-glow-magenta">
            PLAYER 1
          </span>
          <div className="flex gap-[6px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 bg-red shadow-glow-red"
                style={{
                  clipPath:
                    'polygon(50% 100%, 0 35%, 25% 0, 50% 25%, 75% 0, 100% 35%)',
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="border-4 border-cyan px-5 py-[18px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,46,138,0.18), rgba(0,240,255,0.18))',
          }}
        >
          <div className="font-pixel text-[10px] text-yellow text-glow-yellow mb-2">
            ★ NEW QUEST
          </div>
          <div className="font-pixel text-[13px] text-ink leading-[1.6]">
            DEFEAT THE FINAL BOSS
            <br />
            REWARD: 1 CONTINUE
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
