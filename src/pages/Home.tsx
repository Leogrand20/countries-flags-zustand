import { useCallback, useEffect, useState } from 'react'

import { type Region } from '@shared/types/regions'
import { Preloader } from '@shared/ui/Preloader/Preloader'
import { useCountries } from '@entities/country/model/countries'
import { useFilters } from '@entities/country/model/filters'
import { CountriesList } from '@entities/country/ui/CountriesList'
import { Search } from '@features/search-country/ui/Search'

export const Home = () => {
  const countries = useCountries(state => state.countries)
  const isLoading = useCountries(state => state.isLoading)
  const fetchCountries = useCountries(state => state.fetchCountries)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const search = useFilters(state => state.search)
  const region = useFilters(state => state.region)
  const sortMode = useFilters(state => state.sortMode)

  useEffect(() => {
    if (!countries.length) {
      void fetchCountries()
    }
  }, [countries.length, fetchCountries])

  const handleSearch = useCallback(
    (search: string, region: Region | '', sortMode: string | null) => {
      let data = [...countries]

      if (search) {
        data = data.filter(country =>
          country.name && RegExp(search, 'i').test(country.name.common),
        )
      }

      if (region) {
        data = data.filter(country => country.region?.includes(region))
      }

      if (sortMode) {
        data = data.toSorted((a, b) => {
          if (a.name && b.name && sortMode === 'asc' && a.name.common > b.name.common) return 1
          else if (sortMode === 'asc') return -1
          else if (a.name && b.name && sortMode === 'desc' && a.name.common < b.name.common) return 1
          else return -1
        })
      }

      setFilteredCountries(data)
    },
    [countries],
  )

  useEffect(() => {
    handleSearch(search, region, sortMode)
  }, [countries, handleSearch, region, search, sortMode])

  return (
    <>
      <Search onSearch={handleSearch} />

      {isLoading ? <Preloader /> : <CountriesList countries={filteredCountries} />}
    </>
  )
}
