'use client'
import { getIcon } from '@/lib/get-icon'
import { AirPollutionType, ForecastType, HourlyWeatherType } from '@/lib/types'
import {
  getHoursAndMinutes,
  getHumidityDescription,
  transformDateAndHours,
} from '@/lib/utils'
import { CloudSun } from 'lucide-react'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface GlobalContextType {
  forecast: ForecastType
  hourlyWeather: HourlyWeatherType
  airPollution: AirPollutionType
}

const GlobalContext = createContext({} as GlobalContextType)

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [forecast, setForecast] = useState<ForecastType>({
    coord: { lat: 0, lon: 0 },
    clouds: { all: 0 },
    icon: <CloudSun size={40} />,
    wind: { speed: 0, deg: 0, gust: 0 },
    visibility: 0,
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      feels_like: 0,
      humidity: 0,
      humidityDescription: '',
      pressure: 0,
    },
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
        clouds: { all: 0 },

        visibility: 0,
        wind: { speed: 0, deg: 0, gust: 0 },
        main: {
          temp: 0,
          temp_min: 0,
          temp_max: 0,
          feels_like: 0,
          humidity: 0,
          humidityDescription: '',
          pressure: 0,
        },
        weather: [{ main: '', description: '' }],
        dt_txt: '',
        icon: <CloudSun size={40} />,
      },
    ],
  })
  const [airPollution, setAirPollution] = useState<AirPollutionType>({
    list: [
      {
        main: { aqi: 0, description: '' },
        components: {
          co: 0,
          no: 0,
          no2: 0,
          o3: 0,
          so2: 0,
          pm2_5: 0,
          pm10: 0,
          nh3: 0,
        },
      },
    ],
  })

  async function fetchForecast() {
    try {
      const response = await fetch('api/weather')
      const data: ForecastType = await response.json()

      const sunriseFormatted = getHoursAndMinutes(data.sys.sunrise)
      const sunsetFormatted = getHoursAndMinutes(data.sys.sunset)

      const icon = getIcon(data.weather[0].main)

      const processData: ForecastType = {
        ...data,
        main: {
          ...data.main,
          humidityDescription: getHumidityDescription(data.main.humidity),
        },
        icon,
        sunriseFormatted,
        sunsetFormatted,
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
          return {
            ...item,
            icon: getIcon(item.weather[0].main),
            dt_txt: transformDateAndHours(item.dt_txt),
          }
        }),
      }

      setHourlyWeather(processData)
    } catch (error) {
      console.error('Erro ao buscar as informações', error)
    }
  }

  async function fetchAirPollution() {
    try {
      const response = await fetch('api/air-pollution')
      const data: AirPollutionType = await response.json()

      const pollutionValues = [20, 40, 60, 80, 100]
      const pollutionDescriptions = [
        'boa',
        'razoável',
        'moderada',
        'ruim',
        'muito ruim',
      ]
      const processData: AirPollutionType = {
        list: [
          {
            main: {
              aqi: pollutionValues[data.list[0].main.aqi - 1],
              description: pollutionDescriptions[data.list[0].main.aqi - 1],
            },
            components: data.list[0].components,
          },
        ],
      }
      setAirPollution(processData)
    } catch (error) {
      console.error('Erro ao buscar as informações', error)
    }
  }

  useEffect(() => {
    fetchForecast()
    fetchHourlyWeather()
    fetchAirPollution()
  }, [])

  return (
    <GlobalContext.Provider value={{ forecast, hourlyWeather, airPollution }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
