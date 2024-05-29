'use client'
import { useGlobalContext } from '@/context/global-context'
import { Clock } from 'lucide-react'
import { Box } from '../box'

export function HourlyWeather() {
  const { hourlyWeather } = useGlobalContext()

  return (
    <Box className="flex flex-col">
      <div className="flex items-center gap-2">
        <Clock />
        <p className="text-xl font-semibold">Previsão horária</p>
      </div>
      <div className="text-lg grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 md:mt-4 lg:grid-cols-3">
        {hourlyWeather.list.map((item) => {
          return (
            <div key={item.dt} className="flex items-center flex-col gap-2">
              <div className="flex gap-1">
                <p>{item.date}</p>
                <p>-</p>
                <p>{item.hour}:00</p>
              </div>
              {item.icon}
              <p>{item.main.temp}</p>
            </div>
          )
        })}
      </div>
    </Box>
  )
}
