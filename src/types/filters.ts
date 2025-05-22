import { Region } from './regions'

export interface FiltersState {
  search: string
  region: Region
  sortMode: string | null
}

export interface FiltersActions {
  setSearchFilter: (value: string) => void
  setRegionFilter: (region: Region) => void
  setSortModeFilter: (mode: string | null) => void
  resetFilters: () => void
}

export type FiltersStore = FiltersState & FiltersActions
