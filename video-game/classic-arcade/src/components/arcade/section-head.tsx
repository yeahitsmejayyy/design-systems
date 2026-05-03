import { cn } from '@/lib/utils'

interface SectionHeadProps {
  number: string
  title: string
  meta?: string
  className?: string
}

export function SectionHead({
  number,
  title,
  meta,
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        'flex items-baseline gap-4 pb-[14px] mb-7 border-b-2 border-dashed border-rule',
        className
      )}
    >
      <span className="font-pixel text-[11px] tracking-[0.18em] text-magenta text-glow-magenta whitespace-nowrap">
        // {number}
      </span>
      <h2 className="font-pixel text-[22px] tracking-[0.02em] text-cyan text-glow-cyan m-0">
        {title}
      </h2>
      {meta && (
        <span className="ml-auto font-pixel text-[9px] tracking-[0.18em] text-mute">
          {meta}
        </span>
      )}
    </div>
  )
}
