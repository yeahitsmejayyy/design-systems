import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-pixel text-[11px] tracking-[0.06em] border-4 border-outline cursor-pointer shadow-pixel transition-[transform,box-shadow,filter] duration-[80ms] [transition-timing-function:steps(2)] hover:brightness-90 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-50 outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-mario-red text-paper-warm text-shadow-pixel-sm',
        pipe: 'bg-hill-green text-paper-warm text-shadow-pixel-sm',
        plaque:
          'bg-brick text-paper-warm text-shadow-pixel-sm relative before:content-[""] before:absolute before:w-1 before:h-1 before:bg-outline before:top-1 before:left-1 after:content-[""] after:absolute after:w-1 after:h-1 after:bg-outline after:top-1 after:right-1',
        coin: 'bg-coin text-ink',
        block: 'bg-block text-ink',
        ghost: 'bg-paper text-ink',
      },
      size: {
        default: 'px-5 py-[14px]',
        sm: 'px-3 py-2 text-[10px]',
        lg: 'px-7 py-4 text-[13px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
