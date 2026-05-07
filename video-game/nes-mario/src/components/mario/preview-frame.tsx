import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface PreviewFrameProps {
  title: string
  bg?: 'sky' | 'paper' | 'paper-warm' | 'night'
  fullBleed?: boolean
  children: ReactNode
}

const bgClass = {
  sky: 'bg-sky',
  paper: 'bg-paper',
  'paper-warm': 'bg-paper-warm',
  night: 'bg-night',
}

export function PreviewFrame({
  title,
  bg = 'sky',
  fullBleed = false,
  children,
}: PreviewFrameProps) {
  return (
    <div className={cn('min-h-screen relative', bgClass[bg])}>
      <div className="fixed top-4 left-4 z-50 font-pixel text-[10px] tracking-kicker bg-paper-warm border-[3px] border-outline px-3 py-[6px]">
        <Link
          to="/"
          className="text-ink-soft hover:text-mario-red border-0 transition-colors"
        >
          ← INDEX
        </Link>
        <span className="text-mute mx-2">/</span>
        <span className="text-mario-red">{title}</span>
      </div>
      <div className={cn(fullBleed ? '' : 'pt-14')}>{children}</div>
    </div>
  )
}
