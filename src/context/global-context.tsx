'use client'
import { getIcon } from '@/lib/get-icon'
import { CloudSun } from 'lucide-react'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Main {
  temp: number
  temp_min: number
  temp_max: number
  feels_like: number
}

interface Weather {
  main: string
  description: string
}

interface ForecastType {
  main: Main
  weather: Weather[]
  timezone: number
  name: string
  sys: {
    sunrise: number
    sunset: number
  }
  sunriseFormatted: string
  sunsetFormatted: string
}

interface WeatherItem {
  dt: number
  main: Main
  weather: Weather[]
  icon: JSX.Element
  hour: number
  date: string
}

interface HourlyWeatherType {
  list: WeatherItem[]
}

interface GlobalContextType {
  forecast: ForecastType
  hourlyWeather: HourlyWeatherType
}

const GlobalContext = createContext({} as GlobalContextType)

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [forecast, setForecast] = useState<ForecastType>({
    main: { temp: 0, temp_min: 0, temp_max: 0, feels_like: 0 },
    timezone: 0,
    name: '',
    weather: [{ main: '', description: '' }],
    sys: {
      sunrise: 0,
      sunset: 0,
    },
    sunriseFormatted: '',
    sunsetFormatted: '',
  })
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType>({
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          temp_min: 0,
          temp_max: 0,
          feels_like: 0,
        },
        weather: [{ main: '', description: '' }],
        date: '',
        hour: 0,
        icon: <CloudSun size={40} />,
      },
    ],
  })

  async function fetchForecast() {
    try {
      const response = await fetch('api/weather')
      const data: ForecastType = await response.json()

      const sunriseTime = new Date(data.sys.sunrise * 1000)
      const sunsetTime = new Date(data.sys.sunset * 1000)

      const sunriseHours = sunriseTime.getUTCHours()
      const sunriseMinutes = sunriseTime.getUTCMinutes()

      const sunsetHours = sunsetTime.getUTCHours()
      const sunsetMinutes = sunsetTime.getUTCMinutes()

      const processData: ForecastType = {
        ...data,
        sunriseFormatted: `${sunriseHours}:${String(sunriseMinutes).padStart(2, '0')}`,
        sunsetFormatted: `${sunsetHours}:${String(sunsetMinutes).padStart(2, '0')}`,
      }

      setForecast(processData)
    } catch (error) {
      console.error('Erro ao buscar as informações', error)
    }
  }

  async function fetchHourlyWeather() {
    try {
      const response = await fetch('api/hourly-weather')
      const data: HourlyWeatherType = await response.json()

      const processData: HourlyWeatherType = {
        list: data.list.map((item) => {
          const date = new Date(item.dt * 1000)

          return {
            ...item,
            icon: getIcon(item.weather[0].main),
            hour: date.getHours(),
            date: `${date.getDate()}/${date.getMonth() + 1}`,
          }
        }),
      }

      setHourlyWeather(processData)
    } catch (error) {
      console.error('Erro ao buscar as informações', error)
    }
  }

  useEffect(() => {
    fetchForecast()
    fetchHourlyWeather()
  }, [])

  return (
    <GlobalContext.Provider value={{ forecast, hourlyWeather }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
