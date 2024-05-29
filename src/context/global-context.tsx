'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ForecastType {
  main: { temp: number; temp_min: number; temp_max: number; feels_like: number }
  timezone: number
  name: string
  weather: [{ main: string; description: string }]
}

interface GlobalContextType {
  forecast: ForecastType
}

const GlobalContext = createContext({} as GlobalContextType)

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [forecast, setForecast] = useState<ForecastType>({
    main: { temp: 0, temp_min: 0, temp_max: 0, feels_like: 0 },
    timezone: 0,
    name: '',
    weather: [{ main: '', description: '' }],
  })

  async function fetchForecast() {
    try {
      const response = await fetch('api/weather')
      const data = await response.json()
      console.log(data)

      setForecast(data)
    } catch (error) {
      console.error('Erro ao buscar as informações', error)
    }
  }

  useEffect(() => {
    fetchForecast()
  }, [])

  return (
    <GlobalContext.Provider value={{ forecast }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
