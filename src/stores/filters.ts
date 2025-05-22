import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { FiltersState, FiltersStore } from '@shared-types/filters'

const initialState: FiltersState = {
  search: '',
  region: '',
  sortMode: null,
}

export const useFilters = create<FiltersStore>()(
  devtools(
    immer((set) => ({
      ...initialState,

      setSearchFilter: (value) =>
        set((state) => {
          state.search = value
        }),

      setRegionFilter: (region) =>
        set((state) => {
          state.region = region
        }),

      setSortModeFilter: (mode) =>
        set((state) => {
          state.sortMode = mode
        }),

      resetFilters: () =>
        set((state) => {
          state.search = initialState.search
          state.region = initialState.region
          state.sortMode = initialState.sortMode
        }),
    }))
  )
)
