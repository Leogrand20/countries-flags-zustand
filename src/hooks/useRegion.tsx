import { useFilters } from '@stores/filters'

import { OnSelectHandler } from '../types/hooks'
import { Region } from '../types/regions'

export const useRegion = (): [Region | '', OnSelectHandler] => {
  const region = useFilters((state) => state.region)
  const setRegionFilter = useFilters((state) => state.setRegionFilter)

  const setRegion: OnSelectHandler = (reg) => {
    if (reg) {
      setRegionFilter(reg.value)
    } else {
      setRegionFilter('')
    }
  }

  return [region, setRegion]
}
