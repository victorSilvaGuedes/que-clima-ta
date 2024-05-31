'use client'
import { useGlobalContext } from '@/context/global-context'
import { cn } from '@/lib/utils'
import { Gauge } from 'lucide-react'
import { Box } from '../box'

interface PressureProps {
  className?: string
}

export function Pressure({ className }: PressureProps) {
  const { forecast } = useGlobalContext()

  return (
    <Box className={cn('flex flex-col gap-4 justify-between', className)}>
      <div className="flex items-center gap-2">
        <Gauge />
        <p className="font-semibold text-xl">Pressão atmosférica</p>
      </div>
      <p className="text-center text-3xl">{forecast.main.pressure} hPa</p>
      <p className="-mt-2 text-sm">Padrão ao nível do mar ≅ 1023 hPa</p>
    </Box>
  )
}
