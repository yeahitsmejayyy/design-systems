import { cn } from '@/lib/utils'

interface BgWashProps {
  variant?: 'page' | 'hero' | 'small'
  className?: string
}

const washes = {
  page: `radial-gradient(ellipse 900px 500px at 12% 8%, rgba(255,46,138,0.22), transparent 60%),
         radial-gradient(ellipse 700px 400px at 92% 32%, rgba(0,240,255,0.16), transparent 65%),
         radial-gradient(ellipse 600px 300px at 50% 100%, rgba(255,233,61,0.08), transparent 60%)`,
  hero: `radial-gradient(ellipse 600px 300px at 20% 25%, rgba(255,46,138,0.28), transparent 60%),
         radial-gradient(ellipse 500px 280px at 80% 50%, rgba(0,240,255,0.22), transparent 65%),
         radial-gradient(ellipse 400px 200px at 50% 95%, rgba(255,233,61,0.12), transparent 60%)`,
  small: `radial-gradient(ellipse 500px 200px at 30% 50%, rgba(255,46,138,0.25), transparent 60%),
          radial-gradient(ellipse 400px 200px at 75% 50%, rgba(0,240,255,0.20), transparent 65%)`,
}

export function BgWash({ variant = 'page', className }: BgWashProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ background: washes[variant] }}
    />
  )
}
