import { useFilters } from '@shared-stores/filters'
import { OnSearchHandler } from '../types/hooks'

export const useSearch = (): [string, OnSearchHandler] => {
  const search = useFilters((state) => state.search)
  const setSearchFilter = useFilters((state) => state.setSearchFilter)

  const setSearch: OnSearchHandler = (e): void => {
    setSearchFilter(e.target.value)
  }

  return [search, setSearch]
}
