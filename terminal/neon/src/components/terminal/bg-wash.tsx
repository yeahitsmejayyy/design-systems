import { cn } from '@/lib/utils'

interface BgWashProps {
  variant?: 'page' | 'hero' | 'small'
  className?: string
}

/**
 * Painterly radial washes — multi-stop ellipses in accent colors at low alpha.
 * The neon counterpart to static-terminal's grayscale wash.
 */
const washes = {
  page: `radial-gradient(ellipse 900px 500px at 10% 5%, rgba(255,45,120,0.18), transparent 60%),
         radial-gradient(ellipse 700px 400px at 95% 30%, rgba(34,228,255,0.10), transparent 65%),
         radial-gradient(ellipse 800px 500px at 50% 100%, rgba(107,43,184,0.55), transparent 60%)`,
  hero: `radial-gradient(ellipse 600px 300px at 15% 15%, rgba(255,45,120,0.22), transparent 60%),
         radial-gradient(ellipse 500px 300px at 85% 50%, rgba(34,228,255,0.16), transparent 65%),
         radial-gradient(ellipse 500px 280px at 55% 95%, rgba(107,43,184,0.65), transparent 60%)`,
  small: `radial-gradient(ellipse 500px 200px at 30% 40%, rgba(255,45,120,0.20), transparent 60%),
          radial-gradient(ellipse 400px 200px at 70% 60%, rgba(34,228,255,0.12), transparent 65%)`,
}

export function BgWash({ variant = 'page', className }: BgWashProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ background: washes[variant] }}
    />
  )
}
