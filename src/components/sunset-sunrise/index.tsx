'use client'

import { useGlobalContext } from '@/context/global-context'
import { Sunrise, Sunset } from 'lucide-react'
import { Box } from '../box'

export function SunsetSunrise() {
  const { forecast } = useGlobalContext()
  return (
    <Box className="flex flex-col flex-1 gap-4 justify-evenly">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Sunrise />
          <p className="text-xl font-semibold">Nascer do sol</p>
        </div>
        <p className="text-5xl font-semibold text-center">
          {forecast.sunriseFormatted}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Sunset />
          <p className="text-xl font-semibold">Pôr do sol</p>
        </div>
        <p className="text-5xl font-semibold text-center">
          {forecast.sunsetFormatted}
        </p>
      </div>
    </Box>
  )
}
