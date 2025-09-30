import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { type ErrorStore } from '@shared/types/error.ts'

export const useError = create<ErrorStore>()(
  devtools(
    immer(
      set => (
        {
          error: '',

          setError: (errorMessage: string) => set(state => {
            state.error = errorMessage
          }),

          clearError: () => set(state => {
            state.error = ''
          }),
        }
      ),
    ),
  ),
)