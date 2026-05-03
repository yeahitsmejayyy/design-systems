import { cn } from '@/lib/utils'

interface ManifestEntry {
  key: string
  value: string
}

interface ManifestProps {
  entries: ManifestEntry[]
  className?: string
}

export function Manifest({ entries, className }: ManifestProps) {
  return (
    <div
      className={cn(
        'bg-term border border-rule px-7 py-6 font-mono text-[13px] text-ink-soft leading-[1.8]',
        className
      )}
    >
      {entries.map((entry) => (
        <div key={entry.key}>
          <span className="text-bright text-glow-bright">{entry.key}</span>{' '}
          <span className="text-mute">→</span>{' '}
          <span className="text-mid">"{entry.value}"</span>
        </div>
      ))}
    </div>
  )
}
