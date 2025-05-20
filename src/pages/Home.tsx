import { FC, useCallback, useEffect, useState } from 'react'

import { CountriesList } from '../components/countries/CountriesList'
import { Preloader } from '../components/preloader/Preloader'
import { Search } from '../components/search/Search'
import {
  selectRegionFilter,
  selectSearchFilter,
  selectSortModeFilter,
} from '../redux/selectors/filter-selectors'
import { useAppSelector } from '../redux/store'
import { useCountries } from '../stores/countries'
import { Region } from '../types/regions'

export const Home: FC = () => {
  const countries = useCountries((state) => state.countries)
  const isLoading = useCountries((state) => state.isLoading)
  const fetchCountries = useCountries((state) => state.fetchCountries)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const search = useAppSelector(selectSearchFilter)
  const region = useAppSelector(selectRegionFilter)
  const sortMode = useAppSelector(selectSortModeFilter)

  useEffect(() => {
    if (!countries.length) {
      fetchCountries()
    }
  }, [countries.length])

  const handleSearch = useCallback(
    (search: string, region: Region | '', sortMode: string | null) => {
      let data = [...countries]

      if (search) {
        data = data.filter(
          (country) =>
            country.name && RegExp(search, 'i').test(country.name.common)
        )
      }

      if (region) {
        data = data.filter((country) => country.region?.includes(region))
      }

      if (sortMode) {
        data = data.toSorted((a, b) => {
          if (
            a.name &&
            b.name &&
            sortMode === 'asc' &&
            a.name.common > b.name.common
          )
            return 1
          else if (sortMode === 'asc') return -1
          else if (
            a.name &&
            b.name &&
            sortMode === 'desc' &&
            a.name.common < b.name.common
          )
            return 1
          else return -1
        })
      }

      setFilteredCountries(data)
    },
    [countries]
  )

  useEffect(() => {
    handleSearch(search, region, sortMode)
  }, [countries, handleSearch, region, search, sortMode])

  return (
    <>
      <Search onSearch={handleSearch} />

      {isLoading ? (
        <Preloader />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </>
  )
}
