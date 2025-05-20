import { RootState } from '../store'

export const selectSearchFilter = (state: RootState) => state.filter.search
export const selectRegionFilter = (state: RootState) => state.filter.region
export const selectSortModeFilter = (state: RootState) => state.filter.sortMode
