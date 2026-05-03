import { PreviewFrame } from '@/components/terminal/preview-frame'

export function ComponentsCards() {
  return (
    <PreviewFrame title="components / cards">
      <div className="p-7 grid grid-cols-2 gap-[14px]">
        <div className="bg-paper-dim border border-rule p-5 flex flex-col gap-[10px]">
          <span className="font-mono text-[11px] text-bright tracking-[0.2em] text-section-n">
            01
          </span>
          <span className="text-[18px] font-medium text-ink tracking-[-0.01em]">
            Numbered row card
          </span>
          <span className="text-[13px] text-ink-soft leading-[1.5]">
            Black surface with subtle dim lift, mono kicker, sans body. Default
            card.
          </span>
        </div>

        <div className="bg-term border-l-[3px] border-bright px-[22px] py-5 flex flex-col gap-[10px] shadow-quote-bleed">
          <span className="text-[16px] italic text-ink">
            "there is no{' '}
            <span className="text-bright text-glow-bright">spoon</span>"
          </span>
          <span className="font-mono text-[11px] text-mute tracking-[0.14em] uppercase">
            — archive · 1999
          </span>
        </div>

        <div className="bg-term border border-rule p-5 flex flex-col gap-[6px]">
          <span className="text-[40px] font-light tracking-[-0.02em] text-bright text-stat-n leading-none">
            128bit
          </span>
          <span className="font-mono text-[11px] text-mute tracking-[0.2em] uppercase">
            handshake key
          </span>
        </div>

        <div
          className="border border-soft px-5 py-[18px] flex flex-col gap-2"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,255,65,0.12), rgba(10,56,18,0.5))',
          }}
        >
          <span className="font-mono text-[10px] text-bright text-glow-bright tracking-[0.2em] uppercase">
            // signal locked
          </span>
          <span className="text-[15px] text-ink">
            Gradient-edge callout for highlights
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
