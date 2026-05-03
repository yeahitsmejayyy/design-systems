import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

/**
 * Cyber input. Default focus ring is cyan; pass `error` to flip the border
 * and ring to hot pink for "access denied" / invalid-credential states.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'font-sans text-[15px] text-ink bg-term-paper border border-rule px-[14px] py-3 outline-none transition-[border-color,box-shadow] duration-[160ms]',
          'placeholder:text-mute',
          !error &&
            'focus:border-bright focus:shadow-[0_0_0_3px_rgba(0,231,255,0.18),0_0_14px_rgba(0,231,255,0.28)]',
          error &&
            'border-hot shadow-[0_0_0_3px_rgba(255,45,143,0.15)] focus:border-hot focus:shadow-[0_0_0_3px_rgba(255,45,143,0.25),0_0_14px_rgba(255,45,143,0.28)]',
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
