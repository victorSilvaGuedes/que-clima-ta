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
