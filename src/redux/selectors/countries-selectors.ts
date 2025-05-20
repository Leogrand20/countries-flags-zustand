import { RootState } from '../store'

export const selectCountries = (state: RootState) => state.countries.countries
export const selectIsLoading = (state: RootState) => state.countries.isLoading
