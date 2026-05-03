import { cn } from '@/lib/utils'

interface ScoreboardEntry {
  key: string
  value: string
  variant?: 'default' | '1up'
}

interface ScoreboardProps {
  entries: ScoreboardEntry[]
  className?: string
}

export function Scoreboard({ entries, className }: ScoreboardProps) {
  return (
    <div
      className={cn(
        'bg-cabinet border-4 border-yellow shadow-glow-yellow px-7 py-[22px] font-pixel text-[12px] leading-[2]',
        className
      )}
    >
      {entries.map((entry) => {
        const is1up = entry.variant === '1up'
        return (
          <div key={entry.key} className="flex justify-between gap-6">
            <span
              className={cn(
                is1up
                  ? 'text-green text-glow-green'
                  : 'text-magenta text-glow-magenta'
              )}
            >
              {entry.key}
            </span>
            <span className="text-cyan text-glow-cyan">→</span>
            <span
              className={cn(
                is1up
                  ? 'text-green text-glow-green'
                  : 'text-yellow text-glow-yellow'
              )}
            >
              {entry.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}
