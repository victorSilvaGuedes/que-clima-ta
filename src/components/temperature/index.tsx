'use client'

import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Brain, MapPin, Minus, Plus } from 'lucide-react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useEffect, useState } from 'react'
import { Box } from '../box'

interface TemperatureProps {
  className?: string
}

export function Temperature({ className }: TemperatureProps) {
  const { forecast } = useGlobalContext()
  const [currentDay, setCurrentDay] = useState('')
  const [currentLocalTime, setCurrentLocalTime] = useState('')

  useEffect(() => {
    function updateTime() {
      const timezone = forecast.timezone
      const localTime = moment()
        .utcOffset(timezone / 60)
        .format('HH:mm:ss')
      const day = moment()
        .locale('pt-br')
        .utcOffset(timezone / 60)
        .format('dddd')
      setCurrentLocalTime(localTime)
      setCurrentDay(day)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [forecast.timezone])

  return (
    <Box className={cn('flex flex-col gap-4 h-full w-full', className)}>
      <div className="flex items-center gap-2">
        <MapPin />
        <p className="font-semibold text-xl">{forecast.name}</p>
      </div>
      <div className="flex items-center justify-between text-lg">
        <p>{currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</p>
        <p>{currentLocalTime}</p>
      </div>
      <p className="text-center text-7xl font-semibold mt-4">
        {forecast.main.temp.toFixed(1)} °C
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center">
          <Brain size={16} color="#32CD32" />
          <p>Sensação de:</p>
        </div>
        <p>{forecast.main.feels_like} °C</p>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <Minus size={16} color="#1E90FF" />
            <p>Mín.:</p>
          </div>
          <p>{forecast.main.temp_min} °C</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <Plus size={16} color="#FF0000" />
            <p>Máx.:</p>
          </div>
          <p>{forecast.main.temp_max} °C</p>
        </div>
      </div>
      <div className="flex gap-2 text-lg items-center">
        <span>{forecast.icon}</span>
        <p>
          {forecast.weather[0].description.charAt(0).toUpperCase() +
            forecast.weather[0].description.slice(1)}
        </p>
      </div>
    </Box>
  )
}
