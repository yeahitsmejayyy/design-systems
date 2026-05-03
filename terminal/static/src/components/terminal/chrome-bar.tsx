import { cn } from '@/lib/utils'

interface ChromeBarProps {
  title?: string
  className?: string
}

export function ChromeBar({ title, className }: ChromeBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-[10px] border border-rule backdrop-blur-[6px] bg-black/45',
        className
      )}
    >
      <span className="w-[10px] h-[10px] rounded-full bg-bright" />
      <span className="w-[10px] h-[10px] rounded-full bg-bright opacity-55" />
      <span className="w-[10px] h-[10px] rounded-full bg-bright opacity-25" />
      {title && (
        <span className="ml-5 font-mono text-[13px] text-mute">{title}</span>
      )}
    </div>
  )
}
