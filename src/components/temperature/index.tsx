'use client'

import { useGlobalContext } from '@/context/global-context'
import { Box } from '../box'

export function Temperature() {
  const { forecast } = useGlobalContext()

  return (
    <div>
      <Box>
        <div className="flex items-center justify-between">
          <div>
            <p>{forecast.name}</p>
          </div>
          <p>Horario</p>
        </div>
      </Box>
    </div>
  )
}
