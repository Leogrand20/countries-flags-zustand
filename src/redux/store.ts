import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import * as api from '../api/config'
import errorReducer from './slices/errorSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
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
