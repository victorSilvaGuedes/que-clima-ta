import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHoursAndMinutes(timestamp: number) {
  const timestampTime = new Date(timestamp * 1000)

  const timestampHours = timestampTime.getHours().toString().padStart(2, '0')
  const timestampMinutes = timestampTime
    .getMinutes()
    .toString()
    .padStart(2, '0')

  return `${timestampHours}:${timestampMinutes}`
}

export function transformDateAndHours(fullDate: string) {
  const date = new Date(fullDate)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')

  return `${day}/${month}\n${hours}h`
}

export function getHumidityDescription(humidity: number) {
  if (humidity < 20) {
    return 'Muito Baixa - O ar está muito seco, podendo causar desconforto respiratório e problemas de pele'
  } else if (humidity < 40) {
    return 'Baixa - O ar está seco, o que pode causar leve desconforto respiratório'
  } else if (humidity < 60) {
    return 'Moderada - Condição confortável para a maioria das pessoas'
  } else if (humidity < 80) {
    return 'Alta - O ar está úmido, podendo causar sensação de abafamento e facilitar a propagação de doenças respiratórias'
  } else {
    return 'Muito Alta - O ar está muito úmido, podendo causar sensação de desconforto e mofo'
  }
}

export function getWindDirection(degrees: number): [string, string] {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]

  const directionsFull: { [key: string]: string } = {
    N: 'Norte',
    NNE: 'Nor-Nordeste',
    NE: 'Nordeste',
    ENE: 'Leste-Nordeste',
    E: 'Leste',
    ESE: 'Leste-Sudeste',
    SE: 'Sudeste',
    SSE: 'Sul-Sudeste',
    S: 'Sul',
    SSW: 'Sul-Sudoeste',
    SW: 'Sudoeste',
    WSW: 'Oeste-Sudoeste',
    W: 'Oeste',
    WNW: 'Oeste-Noroeste',
    NW: 'Noroeste',
    NNW: 'Nor-Noroeste',
  }

  const index = Math.floor((degrees + 11.25) / 22.5) % 16
  const abbreviation = directions[index]
  const directionFull = directionsFull[abbreviation]

  return [abbreviation, directionFull]
}

export function classifyWindSpeed(speed: number): string {
  const classifications = [
    {
      limit: 1,
      classification: 'Calmo',
      description: 'Fumaça sobe verticalmente.',
    },
    {
      limit: 5,
      classification: 'Brisa leve',
      description: 'Fumaça mostra a direção do vento.',
    },
    {
      limit: 11,
      classification: 'Brisa suave',
      description: 'Folhas em movimento.',
    },
    {
      limit: 19,
      classification: 'Brisa moderada',
      description: 'Leves levantamentos de poeira e papel.',
    },
    {
      limit: 28,
      classification: 'Brisa forte',
      description: 'Galhos pequenos se movem.',
    },
    {
      limit: 38,
      classification: 'Vento fresco',
      description: 'Galhos grandes em movimento, usar guarda-chuvas é difícil.',
    },
    {
      limit: 49,
      classification: 'Vento forte',
      description: 'Galhos grandes se quebram, dificultando a caminhada.',
    },
    {
      limit: 61,
      classification: 'Ventania',
      description: 'Danos leves em estruturas.',
    },
    {
      limit: 74,
      classification: 'Ventania forte',
      description: 'Árvores arrancadas, danos significativos.',
    },
    { limit: 88, classification: 'Tempestade', description: 'Danos extensos.' },
    {
      limit: 102,
      classification: 'Tempestade violenta',
      description: 'Danos devastadores.',
    },
    {
      limit: Infinity,
      classification: 'Furacão',
      description: 'Danos catastróficos.',
    },
  ]

  for (const level of classifications) {
    if (speed <= level.limit) {
      return `${level.classification} - ${level.description}`
    }
  }

  return 'Sem informações'
}
