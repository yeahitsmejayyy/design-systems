import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Wraps a single preview page with shared chrome — back link, page bg.
 * Each preview originally lived as a standalone HTML page; this gives them
 * a consistent return path within the SPA without altering the inner spec.
 */
interface PreviewFrameProps {
  title: string
  bg?: 'paper' | 'term'
  fullBleed?: boolean
  children: ReactNode
}

export function PreviewFrame({
  title,
  bg = 'paper',
  fullBleed = false,
  children,
}: PreviewFrameProps) {
  return (
    <div
      className={cn(
        'min-h-screen relative',
        bg === 'paper' ? 'bg-paper' : 'bg-term'
      )}
    >
      <div className="fixed top-4 left-4 z-50 font-mono text-[11px] uppercase tracking-[0.18em]">
        <Link
          to="/"
          className="text-mute hover:text-magenta border-0 transition-colors"
        >
          ← index
        </Link>
        <span className="text-mute mx-2">/</span>
        <span className="text-ink-soft">{title}</span>
      </div>
      <div className={cn(fullBleed ? '' : 'pt-12')}>{children}</div>
    </div>
  )
}
