import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterSlice } from '../../types/filters'
import { Region } from '../../types/regions'

const initialState: FilterSlice = {
  search: '',
  region: '',
  sortMode: null,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setSearchFilter: (state, { payload }: PayloadAction<string>): void => {
      state.search = payload
    },

    setRegionFilter: (state, { payload }: PayloadAction<Region | ''>): void => {
      state.region = payload
    },

    setSortModeFilter: (
      state,
      { payload }: PayloadAction<string | null>
    ): void => {
      state.sortMode = payload
    },

    resetFilters: () => initialState,
  },
})

export const {
  setSearchFilter,
  setRegionFilter,
  setSortModeFilter,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
