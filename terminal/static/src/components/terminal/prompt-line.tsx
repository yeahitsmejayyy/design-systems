import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Cursor } from './cursor'

interface PromptLineProps {
  children: ReactNode
  showCursor?: boolean
  className?: string
}

export function PromptLine({
  children,
  showCursor = true,
  className,
}: PromptLineProps) {
  return (
    <div
      className={cn(
        'font-mono text-[14px] text-ink-soft flex items-center gap-[10px]',
        className
      )}
    >
      <span className="text-bright text-glow-bright">$</span>
      {children}
      {showCursor && <Cursor className="w-[9px] h-[18px] ml-[2px]" />}
    </div>
  )
}
