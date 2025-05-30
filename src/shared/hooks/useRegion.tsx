import { OnSelectHandler } from '@shared/types/hooks'
import { Region } from '@shared/types/regions'
import { useFilters } from '@entities/country/model/filters'

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
