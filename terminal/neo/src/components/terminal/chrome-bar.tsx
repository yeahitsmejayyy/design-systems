import { cn } from '@/lib/utils'

interface ChromeBarProps {
  title?: string
  className?: string
}

/**
 * Three phosphor-green dots at descending opacity (1.0 / 0.55 / 0.25).
 * Each dot carries a phosphor halo — same color, brightness alone steps down.
 */
export function ChromeBar({ title, className }: ChromeBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-[10px] border border-rule backdrop-blur-[6px] bg-black/60',
        className
      )}
    >
      <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow" />
      <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow opacity-55" />
      <span className="w-[10px] h-[10px] rounded-full bg-bright shadow-dot-glow opacity-25" />
      {title && (
        <span className="ml-5 font-mono text-[13px] text-mute">{title}</span>
      )}
    </div>
  )
}
