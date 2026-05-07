import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-pixel text-[9px] tracking-[0.06em] px-[10px] py-[6px] border-[3px] border-outline',
  {
    variants: {
      variant: {
        red: 'bg-mario-red text-paper-warm text-shadow-pixel-sm',
        pipe: 'bg-hill-green text-paper-warm text-shadow-pixel-sm',
        coin: 'bg-coin text-ink',
        fire: 'bg-fire text-paper-warm text-shadow-pixel-sm',
        block: 'bg-block text-ink',
        plaque: 'bg-brick text-paper-warm text-shadow-pixel-sm',
        mute: 'bg-paper text-mute border-rule',
      },
    },
    defaultVariants: {
      variant: 'red',
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
