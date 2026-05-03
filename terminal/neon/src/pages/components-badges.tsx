import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Badge } from '@/components/ui/badge'
import { Kicker } from '@/components/terminal/kicker'

export function ComponentsBadges() {
  return (
    <PreviewFrame title="components / badges">
      <div className="p-7 flex flex-col gap-4">
        <div className="flex gap-[10px] items-center flex-wrap">
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.18em] min-w-[100px]">
            status
          </span>
          <Badge variant="lime">● active</Badge>
          <Badge variant="amber">● pending</Badge>
          <Badge variant="red">● error</Badge>
          <Badge variant="mute">● idle</Badge>
        </div>

        <div className="flex gap-[10px] items-center flex-wrap">
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.18em] min-w-[100px]">
            category
          </span>
          <Badge variant="magenta">agent</Badge>
          <Badge variant="cyan">tool</Badge>
          <Badge variant="lime">shipped</Badge>
        </div>

        <div className="flex gap-[10px] items-center flex-wrap">
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.18em] min-w-[100px]">
            kickers
          </span>
          <Kicker tone="magenta">// 01 · thesis</Kicker>
          <Kicker tone="cyan">// 02 · agents</Kicker>
        </div>
      </div>
    </PreviewFrame>
  )
}
