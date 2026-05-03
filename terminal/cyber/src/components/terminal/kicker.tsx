import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface KickerProps {
  children: ReactNode
  className?: string
  /**
   * `bright` (cyan) is the default workhorse.
   * `mid` is a softer cyan.
   * `hot` is the rare hot-pink — once per surface, max.
   */
  tone?: 'bright' | 'mid' | 'hot'
}

export function Kicker({ children, className, tone = 'bright' }: KickerProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.22em]',
        tone === 'bright' && 'text-bright text-glow-bright',
        tone === 'mid' && 'text-mid text-glow-mid',
        tone === 'hot' && 'text-hot text-glow-hot',
        className
      )}
    >
      {children}
    </span>
  )
}
