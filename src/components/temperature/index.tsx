'use client'

import { useGlobalContext } from '@/context/global-context'
import {
  Brain,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  MapPin,
  Minus,
  Plus,
} from 'lucide-react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useEffect, useState } from 'react'
import { Box } from '../box'

export function Temperature() {
  const { forecast } = useGlobalContext()
  const [currentDay, setCurrentDay] = useState('')
  const [currentLocalTime, setCurrentLocalTime] = useState('')
  function getIcon() {
    switch (forecast.weather[0].main) {
      case 'Clouds': {
        return <Cloud size={40} />
      }
      case 'Thunderstorm': {
        return <CloudLightning size={40} />
      }
      case 'Drizzle': {
        return <CloudDrizzle size={40} />
      }
      case 'Rain': {
        return <CloudRain size={40} />
      }
      case 'Snow': {
        return <CloudSnow size={40} />
      }
      case 'Clear': {
        return <CloudSun size={40} />
      }
      default: {
        return <CloudSun size={40} />
      }
    }
  }
  const icon = getIcon()

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
    <div>
      <Box className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xl">
          <MapPin />
          <p className="font-semibold">{forecast.name}</p>
        </div>
        <div className="flex items-center justify-between text-lg">
          <p>{currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}</p>
          <p>{currentLocalTime}</p>
        </div>
        <p className="text-center text-7xl md:text-8xl font-semibold mt-4">
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
          <span>{icon}</span>
          <p>
            {forecast.weather[0].description.charAt(0).toUpperCase() +
              forecast.weather[0].description.slice(1)}
          </p>
        </div>
      </Box>
    </div>
  )
}
