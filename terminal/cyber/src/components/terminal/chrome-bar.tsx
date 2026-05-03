import { cn } from '@/lib/utils'

interface ChromeBarProps {
  title?: string
  className?: string
}

/**
 * Three cyan dots at descending opacity (1.0 / 0.55 / 0.25), each carrying
 * a soft cyan halo. No more red/amber — neon-noir replaces traffic lights.
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
