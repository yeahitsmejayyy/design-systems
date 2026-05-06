import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KickerProps {
  children: ReactNode
  className?: string
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <span
      className={cn(
        'inline-block font-pixel text-[11px] tracking-kicker text-ink bg-paper-warm border-[3px] border-outline px-3 py-[6px]',
        className
      )}
    >
      {children}
    </span>
  )
}
