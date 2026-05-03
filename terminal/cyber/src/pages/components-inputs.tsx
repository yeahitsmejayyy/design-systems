import { PreviewFrame } from '@/components/terminal/preview-frame'
import { Input } from '@/components/ui/input'
import { Cursor } from '@/components/terminal/cursor'

export function ComponentsInputs() {
  return (
    <PreviewFrame title="components / inputs">
      <div className="p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-[6px]">
          <label className="font-mono text-[11px] text-mute uppercase tracking-[0.18em]">
            node id
          </label>
          <Input type="text" placeholder="alley-04 · neon district" />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label className="font-mono text-[11px] text-mute uppercase tracking-[0.18em]">
            terminal
          </label>
          <div className="font-mono text-[14px] bg-term px-[14px] py-[10px] border border-rule flex items-center gap-[10px] before:content-['$'] before:text-bright before:text-glow-bright">
            <input
              type="text"
              defaultValue="ssh ghost@neon-04 --port=2049"
              className="bg-transparent border-0 p-0 flex-1 font-mono text-[14px] text-ink outline-none focus:shadow-none"
            />
            <Cursor className="w-[8px] h-[14px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <label className="font-mono text-[11px] text-hot text-glow-hot uppercase tracking-[0.18em]">
            // access denied
          </label>
          <Input type="text" defaultValue="root@mainframe" error />
          <span className="font-mono text-[11px] text-hot text-glow-hot tracking-[0.1em]">
            [!!] credentials not in the trust ring
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}
