import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KickerProps {
  children: ReactNode
  className?: string
  tone?: 'cyan' | 'magenta' | 'yellow'
}

export function Kicker({ children, className, tone = 'cyan' }: KickerProps) {
  return (
    <span
      className={cn(
        'font-pixel text-[11px] tracking-[0.18em]',
        tone === 'cyan' && 'text-cyan text-glow-cyan',
        tone === 'magenta' && 'text-magenta text-glow-magenta',
        tone === 'yellow' && 'text-yellow text-glow-yellow',
        className
      )}
    >
      {children}
    </span>
  )
}
