import { cn } from '@/lib/utils'

interface HudStripProps {
  left?: string
  right?: string
  className?: string
}

export function HudStrip({ left, right, className }: HudStripProps) {
  return (
    <div
      className={cn(
        'flex justify-between font-pixel text-[10px] tracking-[0.1em]',
        className
      )}
    >
      {left && <span className="text-cyan text-glow-cyan">{left}</span>}
      {right && <span className="text-yellow text-glow-yellow">{right}</span>}
    </div>
  )
}
