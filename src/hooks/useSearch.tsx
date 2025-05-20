import { selectSearchFilter } from '../redux/selectors/filter-selectors'
import { setSearchFilter } from '../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { OnSearchHandler } from '../types/hooks'

export const useSearch = (): [string, OnSearchHandler] => {
  const dispatch = useAppDispatch()
  const search = useAppSelector(selectSearchFilter)

  const setSearch: OnSearchHandler = (e): void => {
    dispatch(setSearchFilter(e.target.value))
  }

  return [search, setSearch]
}
