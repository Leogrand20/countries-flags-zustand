import { FC, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'

import { useSearch } from '../../hooks/useSearch'
import { useSortMode } from '../../hooks/useSortMode'
import { selectRegionFilter } from '../../redux/selectors/filter-selectors'
import { useAppSelector } from '../../redux/store'
import { SearchProps } from '../../types/search'
import { CustomSelect } from './CustomSelect'

import styles from './Search.module.css'

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const [search, setSearch] = useSearch()
  const [sortMode, setSortMode] = useSortMode()
  const region = useAppSelector(selectRegionFilter)

  useEffect(() => {
    onSearch(search, region, sortMode)
  }, [search, region, sortMode, onSearch])

  return (
    <div className={styles['wrapper']}>
      <label htmlFor="search" className={styles['labelSearch']}>
        <IoSearch />

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className={styles['inputSearch']}
          value={search}
          onChange={setSearch}
        />
      </label>

      <div className="form-radio">
        <input
          type="radio"
          name="sort"
          value="asc"
          checked={sortMode === 'asc'}
          onChange={setSortMode}
        />
        A-Z
        <input
          type="radio"
          name="sort"
          value="desc"
          checked={sortMode === 'desc'}
          onChange={setSortMode}
        />
        Z-A
      </div>

      <CustomSelect />
    </div>
  )
}
