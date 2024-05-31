'use client'
import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Wind } from 'lucide-react'
import { Box } from '../box'
import { Progress } from '../ui/progress'

interface AirPollutionProps {
  className?: string
}

export function AirPollution({ className }: AirPollutionProps) {
  const { airPollution } = useGlobalContext()

  return (
    <Box className={cn('flex flex-col gap-4 justify-between', className)}>
      <div className="flex items-center gap-2">
        <Wind />
        <p className="font-semibold text-xl">Poluição do ar</p>
      </div>
      <Progress value={airPollution.list[0].main.aqi} />
      <p>A qualidade do ar é {airPollution.list[0].main.description}</p>
    </Box>
  )
}
