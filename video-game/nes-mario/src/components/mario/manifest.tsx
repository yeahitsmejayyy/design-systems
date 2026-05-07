import { cn } from '@/lib/utils'

interface ManifestEntry {
  key: string
  value: string
  variant?: 'default' | '1up'
}

interface ManifestProps {
  entries: ManifestEntry[]
  className?: string
}

export function Manifest({ entries, className }: ManifestProps) {
  return (
    <div
      className={cn(
        'bg-paper-warm border-4 border-outline shadow-pixel-lg px-7 py-[22px] font-pixel text-[12px] leading-[2] text-ink',
        className
      )}
    >
      {entries.map((entry) => {
        const is1up = entry.variant === '1up'
        return (
          <div key={entry.key} className="flex justify-between gap-6">
            <span
              className={cn(
                is1up ? 'text-hill-green' : 'text-mario-red'
              )}
            >
              {entry.key}
            </span>
            <span className="text-hill-green">→</span>
            <span
              className={cn(
                is1up ? 'text-hill-green' : 'text-brick-deep'
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
