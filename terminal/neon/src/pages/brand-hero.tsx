import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'
import { Cursor } from '@/components/terminal/cursor'

export function BrandHero() {
  return (
    <PreviewFrame title="brand / hero" bg="term" fullBleed>
      <div className="relative h-[400px] overflow-hidden pt-12">
        <BgWash variant="hero" />
        <div className="nt-scanlines" />
        <div className="nt-vignette" />

        <div className="absolute top-12 left-0 right-0 h-8 z-30 bg-black/50 backdrop-blur-[6px] flex items-center gap-[7px] pl-[14px] border-b border-rule">
          <span className="w-[10px] h-[10px] rounded-full bg-magenta shadow-glow-magenta" />
          <span className="w-[10px] h-[10px] rounded-full bg-amber" />
          <span className="w-[10px] h-[10px] rounded-full bg-lime shadow-glow-lime" />
          <span className="ml-[14px] font-mono text-[11px] text-mute">
            ~/neon-terminal — hero.html
          </span>
        </div>

        <div className="absolute inset-x-8 top-[80px] bottom-6 z-50 flex flex-col justify-center gap-4">
          <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-magenta text-glow-magenta">
            <span className="opacity-60">$</span> welcome --era=agentic
          </span>
          <h1 className="text-[58px] font-normal leading-[0.95] tracking-[-0.025em] text-ink m-0">
            Build in the{' '}
            <em className="italic font-light text-magenta text-display-em">
              open
            </em>
            .
          </h1>
          <span className="font-mono text-[14px] text-ink-soft flex gap-3 items-center">
            <span
              className="w-8 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-magenta), var(--color-cyan))',
              }}
            />
            A field guide for builders who haven't jumped in yet
            <Cursor className="w-[10px] h-[18px]" />
          </span>
        </div>

        <div className="absolute bottom-4 inset-x-8 z-50 flex justify-between font-mono text-[10px] text-mute uppercase tracking-[0.18em]">
          <span>v.2026</span>
          <span className="text-cyan">→ press space</span>
        </div>
      </div>
    </PreviewFrame>
  )
}
