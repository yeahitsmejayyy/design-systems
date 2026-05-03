import { cn } from '@/lib/utils'

interface MarqueeBarProps {
  title?: string
  className?: string
}

export function MarqueeBar({ title, className }: MarqueeBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-[10px] bg-felt border-4 border-magenta shadow-glow-magenta',
        className
      )}
    >
      <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow" />
      <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow opacity-55" />
      <span className="w-3 h-3 rounded-full bg-yellow shadow-glow-yellow opacity-25" />
      {title && (
        <span className="ml-5 font-pixel text-[11px] text-magenta text-glow-magenta tracking-[0.1em]">
          {title}
        </span>
      )}
    </div>
  )
}
