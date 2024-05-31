'use client'
import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Compass, Gauge, Tornado, Wind as WindIcon } from 'lucide-react'
import Image from 'next/image'
import { Box } from '../box'
import { Separator } from '../ui/separator'

interface WindProps {
  className?: string
}

export function Wind({ className }: WindProps) {
  const { forecast } = useGlobalContext()
  return (
    <Box className={cn('flex flex-col h-full w-full gap-2', className)}>
      <div className="flex items-center gap-2">
        <Tornado />
        <p className="font-semibold text-xl">Sobre o vento</p>
      </div>
      <div className="flex gap-4 items-center justify-around flex-col md:flex-row">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2 items-center justify-center">
            <Gauge size={20} />
            <p>Velocidade do vento</p>
          </div>
          <p>{forecast.wind.speed} m/s</p>
          <p className="text-sm">{forecast.wind.speedClassification}</p>
        </div>
        <Separator className="h-1 w-60 md:h-20 md:w-1 rounded-full" />
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2 items-center justify-center">
            <WindIcon size={20} />
            <p>Rajadas de vento</p>
          </div>
          <p>{forecast.wind.gust} m/s</p>
          <p className="text-sm">{forecast.wind.gustClassification}</p>
        </div>
        <Separator className="h-1 w-60 md:h-20 md:w-1 rounded-full" />

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex gap-2 items-center justify-center">
            <Compass size={20} />
            <p>Direção do vento</p>
          </div>
          <div className="relative">
            <Image
              src="/compass.svg"
              width={100}
              height={100}
              alt="Compasso"
              className="dark:invert"
            />
            <Image
              src="/compass-arrow.svg"
              width={10}
              height={10}
              alt="Compasso"
              className="dark:invert absolute top-0 left-1/2"
              style={{
                transform: `rotate(${forecast.wind.deg}deg) translateX(-50%)`,
                height: '100%',
              }}
            />
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-sm">
              {forecast.wind.direction[0]}
            </p>
          </div>
          {forecast.wind.direction[1]}
        </div>
      </div>
    </Box>
  )
}
