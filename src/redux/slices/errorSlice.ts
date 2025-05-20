import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Error } from '../../types/error'

const initialState: Error = {
  error: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,

  reducers: {
    setError: (state, { payload }: PayloadAction<string>): void => {
      state.error = payload
    },

    clearError: (state): void => {
      state.error = ''
    },
  },
})

export const { setError, clearError } = errorSlice.actions

export default errorSlice.reducer
