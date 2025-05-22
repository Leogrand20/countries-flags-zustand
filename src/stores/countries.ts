import { toast } from 'react-toastify'
import { BASE_URL } from '@api/config'
import { Countries } from 'types/countries'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { createCountries } from '@utils/createCountries'

type CountriesState = {
  countries: Countries
  isLoading: boolean
  fetchCountries: () => Promise<void>
}

export const useCountries = create<CountriesState>()(
  devtools(
    immer((set) => ({
      countries: [] as Countries,
      isLoading: false,

      fetchCountries: async () => {
        set(
          (state) => {
            state.isLoading = true
          },
          false,
          'fetchCountries/loadingStart'
        )

        try {
          const res = await fetch(
            BASE_URL + 'all?fields=name,capital,flags,population,region'
          )
          const data = (await res.json()) as Countries

          set(
            (state) => {
              state.countries = [...createCountries(data)]
              state.isLoading = false
            },
            false,
            'fetchCountries/success'
          )
        } catch (error) {
          set(
            (state) => {
              state.isLoading = false
            },
            false,
            'fetchCountries/error'
          )

          toast.error('Ошибка при загрузке Countries')
          console.error('Ошибка при загрузке Countries:', error)
        }
      },
    }))
  )
)
