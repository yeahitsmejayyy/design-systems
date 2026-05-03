import { PreviewFrame } from '@/components/terminal/preview-frame'
import { BgWash } from '@/components/terminal/bg-wash'
import { Cursor } from '@/components/terminal/cursor'

export function BrandHero() {
  return (
    <PreviewFrame title="brand / hero" bg="paper" fullBleed>
      <div className="relative h-[400px] overflow-hidden pt-12">
        <BgWash variant="hero" />
        <div className="mx-binary-grain" />
        <div className="mx-vignette" />

        <div className="absolute top-12 left-0 right-0 h-8 z-30 bg-black/60 backdrop-blur-[6px] flex items-center gap-[7px] pl-[14px] border-b border-rule">
          <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow" />
          <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow opacity-55" />
          <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow opacity-25" />
          <span className="ml-[14px] font-mono text-[11px] text-mute">
            ~/neo-terminal — hero.html
          </span>
        </div>

        <div className="absolute inset-x-8 top-[80px] bottom-6 z-50 flex flex-col justify-center gap-4">
          <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-bright text-glow-bright">
            <span className="opacity-60">$</span> wake --user=neo
          </span>
          <h1 className="text-[58px] font-normal leading-[0.95] tracking-[-0.025em] text-ink m-0">
            Follow the{' '}
            <em className="italic font-light text-bright text-display-em">
              rabbit
            </em>
            .
          </h1>
          <span className="font-mono text-[14px] text-ink-soft flex gap-3 items-center">
            <span
              className="w-8 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-bright), var(--color-soft))',
                boxShadow: '0 0 8px rgba(0,255,65,0.5)',
              }}
            />
            The system is the message
            <Cursor className="w-[10px] h-[18px]" />
          </span>
        </div>

        <div className="absolute bottom-4 inset-x-8 z-50 flex justify-between font-mono text-[10px] text-mute uppercase tracking-[0.18em]">
          <span>v.1999</span>
          <span className="text-bright text-glow-bright">→ jack in</span>
        </div>
      </div>
    </PreviewFrame>
  )
}
