'use client'

import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Sunrise, Sunset } from 'lucide-react'
import { Box } from '../box'

interface SunsetSunriseProps {
  className?: string
}

export function SunsetSunrise({ className }: SunsetSunriseProps) {
  const { forecast } = useGlobalContext()

  return (
    <Box
      className={cn(
        'flex flex-col h-full w-full gap-4 justify-evenly',
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Sunrise color="#FFEA00" />
          <p className="text-xl font-semibold">Nascer do sol</p>
        </div>
        <p className="text-5xl font-semibold text-center">
          {forecast.sunriseFormatted}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Sunset color="#FF9100" />
          <p className="text-xl font-semibold">Pôr do sol</p>
        </div>
        <p className="text-5xl font-semibold text-center">
          {forecast.sunsetFormatted}
        </p>
      </div>
    </Box>
  )
}
