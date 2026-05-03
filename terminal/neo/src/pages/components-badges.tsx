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
          <Badge variant="bright">● online</Badge>
          <Badge variant="warn">● syncing</Badge>
          <Badge variant="soft">● lost</Badge>
          <Badge variant="mute">● idle</Badge>
        </div>

        <div className="flex gap-[10px] items-center flex-wrap">
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.18em] min-w-[100px]">
            category
          </span>
          <Badge variant="bright">agent</Badge>
          <Badge variant="mid">cipher</Badge>
          <Badge variant="soft">archived</Badge>
        </div>

        <div className="flex gap-[10px] items-center flex-wrap">
          <span className="font-mono text-[11px] text-mute uppercase tracking-[0.18em] min-w-[100px]">
            kickers
          </span>
          <Kicker tone="bright">// 01 · wake up</Kicker>
          <Kicker tone="mid">// 02 · jack in</Kicker>
        </div>
      </div>
    </PreviewFrame>
  )
}
