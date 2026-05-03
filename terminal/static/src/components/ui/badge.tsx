import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-mono text-[11px] font-medium uppercase tracking-[0.15em] px-[10px] py-1 rounded-sm',
  {
    variants: {
      variant: {
        bright: 'bg-white/12 text-bright border border-bright',
        mid: 'bg-mid/12 text-mid border border-mid',
        soft: 'bg-soft/20 text-ink-soft border border-soft',
        warn: 'bg-warn/12 text-warn border border-warn',
        mute: 'bg-transparent text-mute border border-rule',
      },
    },
    defaultVariants: {
      variant: 'bright',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
