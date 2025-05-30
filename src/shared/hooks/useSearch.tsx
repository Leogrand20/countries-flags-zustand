import { OnSearchHandler } from '@shared/types/hooks'
import { useFilters } from '@entities/country/model/filters'

export const useSearch = (): [string, OnSearchHandler] => {
  const search = useFilters((state) => state.search)
  const setSearchFilter = useFilters((state) => state.setSearchFilter)

  const setSearch: OnSearchHandler = (e): void => {
    setSearchFilter(e.target.value)
  }

  return [search, setSearch]
}
