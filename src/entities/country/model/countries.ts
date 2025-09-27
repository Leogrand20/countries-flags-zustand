import { toast } from 'react-toastify'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { BASE_URL } from '@shared/api/config'
import { type Countries, type CountriesState } from '@shared/types/countries'
import { createCountries } from '@entities/country/lib/createCountries.ts'

export const useCountries = create<CountriesState>()(
  devtools(
    immer(set => (
      {
        countries: [] as Countries,
        isLoading: false,

        fetchCountries: async () => {
          set(
            state => {
              state.isLoading = true
            },
            false,
            'fetchCountries/loadingStart',
          )

          try {
            const res = await fetch(BASE_URL + 'all?fields=name,capital,flags,population,region')
            const data = (
              await res.json()
            ) as Countries

            set(
              state => {
                state.countries = createCountries(data)
                state.isLoading = false
              },
              false,
              'fetchCountries/success',
            )
          } catch (error) {
            set(
              state => {
                state.isLoading = false
              },
              false,
              'fetchCountries/error',
            )

            toast.error('Ошибка при загрузке Countries')
            console.error('Ошибка при загрузке Countries:', error)
          }
        },
      }
    )),
  ),
)
