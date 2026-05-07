import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PlaqueProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'px-5 py-3',
  md: 'px-9 py-[22px] shadow-pixel',
  lg: 'px-10 py-7 shadow-pixel-lg',
}

export function Plaque({ children, size = 'md', className }: PlaqueProps) {
  return (
    <div
      className={cn(
        'relative inline-block bg-brick border-4 border-outline text-paper-warm font-pixel text-shadow-pixel tracking-pixel',
        sizes[size],
        className
      )}
    >
      <Rivet position="tl" />
      <Rivet position="tr" />
      <Rivet position="bl" />
      <Rivet position="br" />
      {children}
    </div>
  )
}

interface RivetProps {
  position: 'tl' | 'tr' | 'bl' | 'br'
}

function Rivet({ position }: RivetProps) {
  const pos = {
    tl: 'top-[6px] left-[6px]',
    tr: 'top-[6px] right-[6px]',
    bl: 'bottom-[6px] left-[6px]',
    br: 'bottom-[6px] right-[6px]',
  }
  return (
    <span className={cn('absolute w-[6px] h-[6px] bg-outline', pos[position])} />
  )
}
