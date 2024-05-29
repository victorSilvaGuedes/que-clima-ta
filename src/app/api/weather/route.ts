import { env } from '@/env'
import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  try {
    const apiKey = env.OPENWEATHER_API_KEY

    const { searchParams } = request.nextUrl
    console.log(searchParams)

    const lat = -20.8713
    const lon = -48.2993

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`

    return fetch(url)
  } catch (error) {
    console.error('Erro ao buscar as informações', error)
    return new Response('Erro ao buscar as informações', { status: 500 })
  }
}
