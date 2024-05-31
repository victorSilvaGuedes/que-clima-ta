'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-y-visible rounded-full bg-gradient-to-r from-blue-500 via-yellow-300 to-red-600',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="absolute top-1/2 h-7 rounded-full w-2 bg-secondary transform -translate-y-1/2 transition-all border-2 border-primary"
      style={{ left: `${value}%` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
