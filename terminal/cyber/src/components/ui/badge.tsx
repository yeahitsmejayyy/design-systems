import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Cyber badge variants. The `hot` variant is the rare hot-pink "breached" /
 * critical state — use it once per surface, ideally never per row.
 */
const badgeVariants = cva(
  'inline-flex items-center font-mono text-[11px] font-medium uppercase tracking-[0.15em] px-[10px] py-1 rounded-sm',
  {
    variants: {
      variant: {
        bright:
          'bg-bright/12 text-bright border border-bright text-glow-bright',
        mid: 'bg-mid/12 text-mid border border-mid',
        soft: 'bg-soft/20 text-ink-soft border border-soft',
        hot: 'bg-hot/14 text-hot border border-hot text-glow-hot',
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
