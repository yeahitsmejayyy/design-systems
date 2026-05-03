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
            Deep-blue surface with subtle lift, mono kicker, sans body. Default
            card.
          </span>
        </div>

        <div className="bg-term border-l-[3px] border-bright px-[22px] py-5 flex flex-col gap-[10px] shadow-quote-bleed">
          <span className="text-[16px] italic text-ink">
            "the city never{' '}
            <span className="italic text-hot text-glow-hot">sleeps</span>"
          </span>
          <span className="font-mono text-[11px] text-mute tracking-[0.14em] uppercase">
            — neon archive
          </span>
        </div>

        <div className="bg-term border border-rule p-5 flex flex-col gap-[6px]">
          <span className="text-[40px] font-light tracking-[-0.02em] text-bright text-stat-n leading-none">
            2049ms
          </span>
          <span className="font-mono text-[11px] text-mute tracking-[0.2em] uppercase">
            handshake latency
          </span>
        </div>

        <div
          className="border border-bright px-5 py-[18px] flex flex-col gap-2"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,231,255,0.18), rgba(255,45,143,0.18))',
          }}
        >
          <span className="font-mono text-[10px] text-bright text-glow-bright tracking-[0.2em] uppercase">
            // signal locked
          </span>
          <span className="text-[15px] text-ink">
            Cyan-to-pink callout — the rare two-color surface.
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
