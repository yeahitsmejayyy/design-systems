import { cn } from '@/lib/utils'

interface CloudsProps {
  className?: string
}

export function Clouds({ className }: CloudsProps) {
  return <div className={cn('m-clouds', className)} />
}
