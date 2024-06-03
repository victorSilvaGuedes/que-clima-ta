'use client'
import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'
import { Box } from '../box'

interface HourlyWeatherProps {
  className?: string
}

export function HourlyWeather({ className }: HourlyWeatherProps) {
  const { hourlyWeather } = useGlobalContext()

  return (
    <Box className={cn('flex flex-col h-full w-full', className)}>
      <div className="flex items-center gap-2">
        <Clock />
        <p className="text-xl font-semibold">Previsão horária</p>
      </div>
      <div className="text-lg grid gap-8 grid-cols-2 mt-4 md:grid-cols-3">
        {hourlyWeather.list.map((item) => {
          return (
            <div key={item.dt_txt} className="flex items-center flex-col gap-2">
              <p>{item.dt_txt}</p>
              <span>{item.icon}</span>
              <p>{item.main.temp} °C</p>
            </div>
          )
        })}
      </div>
    </Box>
  )
}
