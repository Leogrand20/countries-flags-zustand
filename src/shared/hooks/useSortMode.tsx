import { type OnCheckboxHandler } from '@shared/types/hooks'
import { useFilters } from '@entities/country/model/filters'

export const useSortMode = (): [string | null, OnCheckboxHandler] => {
  const sortMode = useFilters(state => state.sortMode)
  const setSortModeFilter = useFilters(state => state.setSortModeFilter)

  const setSortMode: OnCheckboxHandler = (e) => {
    setSortModeFilter(e.target.value)
  }

  return [sortMode, setSortMode]
}
