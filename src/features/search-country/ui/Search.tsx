import { type FC, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'

import { useSearch } from '@shared/hooks/useSearch'
import { useSortMode } from '@shared/hooks/useSortMode'
import { type SearchProps } from '@shared/types/search'
import { useFilters } from '@entities/country/model/filters'
import { CustomSelect } from '@features/search-country/ui/CustomSelect'

import styles from './Search.module.css'

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const [search, setSearch] = useSearch()
  const [sortMode, setSortMode] = useSortMode()
  const region = useFilters(state => state.region)

  useEffect(() => {
    onSearch(search, region, sortMode)
  }, [search, region, sortMode, onSearch])

  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.labelSearch}>
        <IoSearch />

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className={styles.inputSearch}
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
