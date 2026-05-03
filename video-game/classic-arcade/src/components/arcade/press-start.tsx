import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PressStartProps {
  children?: ReactNode
  className?: string
}

export function PressStart({ children, className }: PressStartProps) {
  return (
    <div
      className={cn(
        'font-pixel text-[14px] text-yellow text-glow-yellow tracking-[0.16em] animate-flash',
        className
      )}
    >
      {children ?? '▶ ▶ ▶  PRESS START TO BEGIN  ◀ ◀ ◀'}
    </div>
  )
}
