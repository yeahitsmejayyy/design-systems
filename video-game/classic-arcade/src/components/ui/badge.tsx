import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-pixel text-[9px] tracking-[0.08em] px-[10px] py-[5px] border-2',
  {
    variants: {
      variant: {
        magenta: 'text-magenta border-magenta text-glow-magenta',
        cyan: 'text-cyan border-cyan text-glow-cyan',
        yellow: 'text-yellow border-yellow text-glow-yellow',
        red: 'text-red border-red text-glow-red',
        green: 'text-green border-green text-glow-green',
        mute: 'text-mute border-rule',
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
