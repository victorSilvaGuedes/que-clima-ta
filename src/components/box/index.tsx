import { cn } from '@/lib/utils'

interface BoxProps {
  children: React.ReactNode
  className?: string
}

export function Box({ children, className }: BoxProps) {
  return (
    <div className={cn('border p-4 rounded-md', className)}>{children}</div>
  )
}
