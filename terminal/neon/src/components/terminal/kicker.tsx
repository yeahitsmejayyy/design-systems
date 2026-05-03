import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KickerProps {
  children: ReactNode
  className?: string
  tone?: 'magenta' | 'cyan' | 'lime'
}

export function Kicker({
  children,
  className,
  tone = 'magenta',
}: KickerProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.22em]',
        tone === 'magenta' && 'text-magenta text-glow-magenta',
        tone === 'cyan' && 'text-cyan text-glow-cyan',
        tone === 'lime' && 'text-lime text-glow-lime',
        className
      )}
    >
      {children}
    </span>
  )
}
