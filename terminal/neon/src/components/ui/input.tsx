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
          'font-sans text-[15px] text-ink bg-term border border-rule px-[14px] py-3 outline-none transition-[border-color,box-shadow] duration-[160ms]',
          'placeholder:text-mute',
          'focus:border-magenta focus:shadow-[0_0_0_3px_rgba(255,45,120,0.2)]',
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
