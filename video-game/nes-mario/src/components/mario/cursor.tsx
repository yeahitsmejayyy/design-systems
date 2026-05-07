import { cn } from '@/lib/utils'

interface CursorProps {
  className?: string
}

export function Cursor({ className }: CursorProps) {
  return (
    <span
      className={cn(
        'inline-block w-[0.6em] h-[1em] bg-mario-red align-[-0.05em] animate-flash-fast',
        className
      )}
    />
  )
}
