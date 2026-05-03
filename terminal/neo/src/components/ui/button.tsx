import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-[160ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-bright/40',
  {
    variants: {
      variant: {
        primary:
          'bg-bright text-paper shadow-glow-bright hover:bg-bright-deep border-0',
        secondary:
          'bg-transparent text-ink border border-ink hover:bg-white/8 hover:shadow-glow-mid',
        ghost:
          'bg-transparent text-ink-soft border border-rule hover:text-ink hover:border-mute',
        terminal:
          'bg-term text-bright border border-rule before:content-["$_"] before:text-bright',
      },
      size: {
        default: 'px-[22px] py-[12px]',
        sm: 'px-4 py-2 text-[11px]',
        lg: 'px-7 py-4 text-[14px]',
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
