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
        'flex items-baseline gap-4 pb-3 mb-6 border-b-[3px] border-outline',
        className
      )}
    >
      <span className="font-pixel text-[11px] tracking-kicker text-mario-red whitespace-nowrap">
        // {number}
      </span>
      <h2 className="font-pixel text-[22px] text-ink m-0 [text-shadow:none]">
        {title}
      </h2>
      {meta && (
        <span className="ml-auto font-pixel text-[9px] tracking-kicker text-mute">
          {meta}
        </span>
      )}
    </div>
  )
}
