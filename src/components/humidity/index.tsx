'use client'
import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Droplets } from 'lucide-react'
import { Box } from '../box'

interface HumidityProps {
  className?: string
}

export function Humidity({ className }: HumidityProps) {
  const { forecast } = useGlobalContext()

  return (
    <Box className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-center gap-2">
        <Droplets />
        <p className="font-semibold text-xl">Umidade</p>
      </div>
      <p className="text-center text-3xl">{forecast.main.humidity}%</p>
      <p className="text-sm">{forecast.main.humidityDescription}</p>
    </Box>
  )
}
