import { useFilters } from '@shared-stores/filters'
import { OnCheckboxHandler } from '@shared-types/hooks'

export const useSortMode = (): [string | null, OnCheckboxHandler] => {
  const sortMode = useFilters((state) => state.sortMode)
  const setSortModeFilter = useFilters((state) => state.setSortModeFilter)

  const setSortMode: OnCheckboxHandler = (e) => {
    setSortModeFilter(e.target.value)
  }

  return [sortMode, setSortMode]
}
