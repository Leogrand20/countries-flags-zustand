import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'

import { Country, CountrySlice } from '../../types/countries'
import { Extra } from '../../types/extra'
import { createCountry } from '../../utils/createCountry'
import { setError } from './errorSlice'

const initialState: CountrySlice = {
  country: {},
  isLoading: false,
}

export const fetchCountry = createAsyncThunk<
  Country,
  string,
  {
    state: { country: CountrySlice }
    extra: Extra
    rejectWithValue: string
  }
>(
  'country/fetchCountry',
  async (
    countryName,
    { dispatch, rejectWithValue, extra: { api, client } }
  ) => {
    try {
      return (await client.get(api.getCountryByName(countryName))).data[0]
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))

        return rejectWithValue(error)
      }

      return rejectWithValue('Unknown error')
    }
  },

  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().country

      if (isLoading) return false
    },
  }
)

const currentCountrySlice = createSlice({
  name: 'country',
  initialState,

  reducers: {},

  extraReducers: ({ addCase }) => {
    addCase(fetchCountry.pending, (state) => {
      state.isLoading = true
    })

    addCase(fetchCountry.fulfilled, (state, { payload }) => {
      state.isLoading = false

      state.country = createCountry(payload)
    })

    addCase(fetchCountry.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default currentCountrySlice.reducer
