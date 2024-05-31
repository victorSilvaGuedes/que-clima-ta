import { AirPollution } from '@/components/air-pollution'
import { HourlyWeather } from '@/components/hourly-weather'
import { Humidity } from '@/components/humidity'
import { Pressure } from '@/components/pressure'
import { SunsetSunrise } from '@/components/sunset-sunrise'
import { Temperature } from '@/components/temperature'
import { Wind } from '@/components/wind'

export default function Home() {
  return (
    <main className="py-4 gap-4 flex flex-col">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Temperature />
        <SunsetSunrise />
        <HourlyWeather />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
        <AirPollution className="col-span-1 md:col-span-2" />
        <Humidity className="col-span-1 lg:col-span-2" />
        <Pressure className="col-span-1 lg:col-span-2" />
      </div>
      <Wind />
    </main>
  )
}
