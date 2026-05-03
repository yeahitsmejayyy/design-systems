import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadProps {
  number: string
  title: string
  meta?: string
  className?: string
  children?: ReactNode
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
        'flex items-baseline gap-4 pb-[14px] mb-7 border-b border-rule',
        className
      )}
    >
      <span className="font-mono text-[13px] tracking-[0.2em] text-bright text-section-n">
        // {number}
      </span>
      <h2 className="font-sans font-normal text-[32px] tracking-[-0.01em] text-ink m-0">
        {title}
      </h2>
      {meta && (
        <span className="ml-auto font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
          {meta}
        </span>
      )}
    </div>
  )
}
