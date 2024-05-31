interface Main {
  temp: number
  temp_min: number
  temp_max: number
  feels_like: number
  humidity: number
  humidityDescription: string
  pressure: number
}

interface Clouds {
  all: number
}
interface Weather {
  main: string
  description: string
}

interface Coord {
  lon: number
  lat: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
  direction: string[]
  speedClassification: string
  gustClassification: string
}

interface Sys {
  sunrise: number
  sunset: number
}

export interface ForecastType {
  coord: Coord
  weather: Weather[]
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  sys: Sys
  timezone: number
  name: string
  icon: JSX.Element
  sunriseFormatted: string
  sunsetFormatted: string
}

interface HourlyWeatherItem {
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  dt_txt: string
  icon: JSX.Element
}

export interface HourlyWeatherType {
  list: HourlyWeatherItem[]
}

interface AirPollutionList {
  main: { aqi: number; description: string }
  components: {
    co: number
    no: number
    no2: number
    o3: number
    so2: number
    pm2_5: number
    pm10: number
    nh3: number
  }
}
export interface AirPollutionType {
  list: AirPollutionList[]
}
