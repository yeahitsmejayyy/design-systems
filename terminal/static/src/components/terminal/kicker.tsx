import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KickerProps {
  children: ReactNode
  className?: string
  tone?: 'bright' | 'mid'
}

export function Kicker({ children, className, tone = 'bright' }: KickerProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.22em]',
        tone === 'bright' && 'text-bright text-glow-bright',
        tone === 'mid' && 'text-mid text-glow-mid',
        className
      )}
    >
      {children}
    </span>
  )
}
