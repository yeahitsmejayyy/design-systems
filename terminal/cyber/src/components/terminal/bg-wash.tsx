import { cn } from '@/lib/utils'

interface BgWashProps {
  variant?: 'page' | 'hero' | 'small'
  className?: string
}

/**
 * Multi-stop cyan + hot-pink + midnight-shadow radial washes.
 * Wet-street neon reflection — the most chromatic of the four siblings.
 */
const washes = {
  page: `radial-gradient(ellipse 900px 500px at 12% 8%, rgba(0,231,255,0.18), transparent 60%),
         radial-gradient(ellipse 700px 400px at 92% 32%, rgba(255,45,143,0.10), transparent 65%),
         radial-gradient(ellipse 800px 500px at 50% 100%, rgba(2,6,16,0.7), transparent 60%)`,
  hero: `radial-gradient(ellipse 600px 300px at 18% 18%, rgba(0,231,255,0.30), transparent 60%),
         radial-gradient(ellipse 500px 280px at 82% 50%, rgba(255,45,143,0.20), transparent 65%),
         radial-gradient(ellipse 500px 280px at 55% 95%, rgba(2,6,16,0.85), transparent 60%)`,
  small: `radial-gradient(ellipse 500px 200px at 30% 40%, rgba(0,231,255,0.25), transparent 60%),
          radial-gradient(ellipse 400px 200px at 75% 60%, rgba(255,45,143,0.18), transparent 65%)`,
}

export function BgWash({ variant = 'page', className }: BgWashProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ background: washes[variant] }}
    />
  )
}
