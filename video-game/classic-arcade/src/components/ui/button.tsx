import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-pixel text-[11px] tracking-[0.08em] border-4 cursor-pointer transition-transform duration-[100ms] [transition-timing-function:steps(2)] active:translate-x-[2px] active:translate-y-[2px] disabled:pointer-events-none disabled:opacity-50 outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-magenta text-ink border-magenta shadow-glow-magenta [text-shadow:1px_1px_0_rgba(0,0,0,0.4)]',
        cyan:
          'bg-cabinet text-cyan border-cyan text-glow-cyan hover:bg-cyan hover:text-cabinet hover:[text-shadow:none] hover:shadow-glow-cyan',
        yellow:
          'bg-cabinet text-yellow border-yellow text-glow-yellow',
        red:
          'bg-cabinet text-red border-red text-glow-red',
        ghost:
          'bg-transparent text-ink-soft border-rule',
        coin:
          'bg-yellow text-cabinet border-yellow shadow-glow-yellow animate-flash',
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
