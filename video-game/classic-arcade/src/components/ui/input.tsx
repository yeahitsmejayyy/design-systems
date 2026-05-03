import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'font-pixel text-[14px] text-ink bg-cabinet border-4 border-rule px-[14px] py-3 outline-none tracking-[0.08em]',
          'placeholder:text-mute',
          'focus:border-magenta focus:shadow-glow-magenta',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
