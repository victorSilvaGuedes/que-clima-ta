import { env } from '@/env'
import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  try {
    const apiKey = env.OPENWEATHER_API_KEY

    const lat = -23.5489
    const lon = -46.6388

    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&cnt=6&appid=${apiKey}`

    return fetch(url, {
      next: {
        revalidate: 60 * 30,
      },
    })
  } catch (error) {
    console.error('Erro ao buscar as informações', error)
    return new Response('Erro ao buscar as informações', { status: 500 })
  }
}
