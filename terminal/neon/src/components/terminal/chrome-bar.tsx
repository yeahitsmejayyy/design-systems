import { cn } from '@/lib/utils'

interface ChromeBarProps {
  title?: string
  className?: string
}

/**
 * Three traffic-light dots reimagined for the neon palette:
 * magenta (red slot) · amber (yellow slot) · lime (green slot).
 */
export function ChromeBar({ title, className }: ChromeBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-[10px] border border-rule backdrop-blur-[6px] bg-black/45',
        className
      )}
    >
      <span className="w-[10px] h-[10px] rounded-full bg-magenta shadow-glow-magenta" />
      <span className="w-[10px] h-[10px] rounded-full bg-amber" />
      <span className="w-[10px] h-[10px] rounded-full bg-lime shadow-glow-lime" />
      {title && (
        <span className="ml-5 font-mono text-[13px] text-mute">{title}</span>
      )}
    </div>
  )
}
