import { type Region } from '@shared/types/regions.ts'

export type FiltersState = {
  search: string
  region: Region
  sortMode: string | null
}

export type FiltersActions = {
  setSearchFilter: (value: string) => void
  setRegionFilter: (region: Region) => void
  setSortModeFilter: (mode: string | null) => void
  resetFilters: () => void
}

export type FiltersStore = FiltersState & FiltersActions
