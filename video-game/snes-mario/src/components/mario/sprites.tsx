import { cn } from '@/lib/utils'

interface SpriteProps {
  className?: string
  animate?: boolean
}

export function Coin({ className, animate }: SpriteProps) {
  return (
    <div
      className={cn(
        'w-9 h-9 rounded-coin bg-coin border-[3px] border-outline',
        animate && 'animate-coin-spin',
        className
      )}
      style={{ boxShadow: 'inset 0 0 0 3px var(--color-coin-deep)' }}
    />
  )
}

export function QBlock({ className, animate = true }: SpriteProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 bg-block border-4 border-outline flex items-center justify-center font-pixel text-[22px] text-ink relative',
        animate && 'animate-block-bump',
        className
      )}
      style={{ boxShadow: 'inset -4px -4px 0 var(--color-block-deep)' }}
    >
      <span
        className="absolute top-[2px] left-[2px] w-1 h-1 bg-ink"
        style={{ boxShadow: '38px 0 0 var(--color-ink)' }}
      />
      <span
        className="absolute bottom-[2px] left-[2px] w-1 h-1 bg-ink"
        style={{ boxShadow: '38px 0 0 var(--color-ink)' }}
      />
      ?
    </div>
  )
}

export function Pipe({ className }: SpriteProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        className="w-16 h-14 bg-hill-green border-4 border-outline relative"
        style={{
          boxShadow:
            'inset -6px 0 0 var(--color-pipe-dark), inset 6px 0 0 var(--color-pipe-light)',
        }}
      >
        <span
          className="absolute -top-2 -left-[6px] -right-[6px] h-4 bg-hill-green border-4 border-outline"
          style={{
            boxShadow:
              'inset -6px 0 0 var(--color-pipe-dark), inset 6px 0 0 var(--color-pipe-light)',
          }}
        />
      </div>
    </div>
  )
}

export function Brick({ className }: SpriteProps) {
  return (
    <div
      className={cn(
        'w-14 h-12 bg-brick border-4 border-outline relative overflow-hidden',
        className
      )}
      style={{ boxShadow: 'inset 0 -4px 0 var(--color-brick-dark)' }}
    >
      <span className="absolute top-[18px] left-0 right-0 h-1 bg-brick-dark" />
      <span className="absolute top-0 bottom-0 left-[22px] w-1 bg-brick-dark" />
    </div>
  )
}

export function Heart({ className }: SpriteProps) {
  return (
    <div
      className={cn('w-[18px] h-[18px] bg-mario-red', className)}
      style={{
        clipPath:
          'polygon(50% 100%, 0 35%, 25% 0, 50% 25%, 75% 0, 100% 35%)',
      }}
    />
  )
}
