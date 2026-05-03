import { cn } from '@/lib/utils'

interface CursorProps {
  className?: string
}

export function Cursor({ className }: CursorProps) {
  return (
    <span
      className={cn(
        'inline-block w-[0.6em] h-[1.1em] bg-bright shadow-glow-bright align-[-0.15em] animate-blink',
        className
      )}
    />
  )
}
