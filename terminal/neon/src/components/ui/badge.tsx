import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-mono text-[11px] font-medium uppercase tracking-[0.15em] px-[10px] py-1 rounded-sm',
  {
    variants: {
      variant: {
        magenta: 'bg-magenta/12 text-magenta border border-magenta',
        cyan: 'bg-cyan/12 text-cyan border border-cyan',
        lime: 'bg-lime/12 text-lime border border-lime',
        amber: 'bg-amber/12 text-amber border border-amber',
        red: 'bg-red/12 text-red border border-red',
        mute: 'bg-transparent text-mute border border-rule',
      },
    },
    defaultVariants: {
      variant: 'magenta',
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
