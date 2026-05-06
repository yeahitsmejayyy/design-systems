import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HudStripProps {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

export function HudStrip({ left, right, className }: HudStripProps) {
  return (
    <div
      className={cn(
        'bg-ink border-[3px] border-outline px-5 py-[10px] flex justify-between font-pixel text-[11px] text-paper',
        className
      )}
    >
      {left && <span>{left}</span>}
      {right && <span>{right}</span>}
    </div>
  )
}
