import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
} from 'lucide-react'

export function getIcon(weather: string) {
  switch (weather) {
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
