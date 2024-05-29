import { HourlyWeather } from '@/components/hourly-weather'
import { SunsetSunrise } from '@/components/sunset-sunrise'
import { Temperature } from '@/components/temperature'

export default function Home() {
  return (
    <main className="py-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-72 md:w-72 lg:w-96">
          <Temperature />
        </div>
        <HourlyWeather />
        <SunsetSunrise />
      </div>
    </main>
  )
}
