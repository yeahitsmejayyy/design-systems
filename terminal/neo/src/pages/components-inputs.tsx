import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Input } from '@/components/ui/input'
import { Cursor } from '@/components/terminal/cursor'

export function ComponentsInputs() {
  return (
    <PreviewFrame title="components / inputs">
      <div className="p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-[6px]">
          <label className="font-mono text-[11px] text-mute uppercase tracking-[0.18em]">
            project name
          </label>
          <Input type="text" placeholder="my-neo-app" />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label className="font-mono text-[11px] text-mute uppercase tracking-[0.18em]">
            terminal
          </label>
          <div className="font-mono text-[14px] bg-term px-[14px] py-[10px] border border-rule flex items-center gap-[10px] before:content-['$'] before:text-bright before:text-glow-bright">
            <input
              type="text"
              defaultValue="connect --target=zion"
              className="bg-transparent border-0 p-0 flex-1 font-mono text-[14px] text-bright outline-none focus:shadow-none"
            />
            <Cursor className="w-[8px] h-[14px]" />
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
