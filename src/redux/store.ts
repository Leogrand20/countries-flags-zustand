import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import * as api from '../api/config'
import countriesReducer from './slices/countriesSlice'
import countryReducer from './slices/countrySlice'
import errorReducer from './slices/errorSlice'
import filterReducer from './slices/filterSlice'
import neighborsReducer from './slices/neighborsSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    neighbors: neighborsReducer,
    error: errorReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
