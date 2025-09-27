import { toast } from 'react-toastify'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { BASE_URL } from '@shared/api/config'
import { type ApiCountry, type CountryState } from '@shared/types/countries'
import { createCountry } from '@entities/country/lib/createCountry.ts'

export const useCountry = create<CountryState>()(
  devtools(
    immer(set => (
      {
        country: null,
        isLoading: false,

        fetchCountry: async (countryName: string) => {
          set(
            state => {
              state.isLoading = true
            },
            false,
            'fetchCountry/loadingStart',
          )

          try {
            const res = await fetch(BASE_URL + 'name/' + countryName)
            const data = (
              await res.json()
            ) as ApiCountry[]

            set(
              state => {
                state.country = createCountry(data)

                state.isLoading = false
              },
              false,
              'fetchCountry/success',
            )
          } catch (error) {
            set(
              state => {
                state.isLoading = false
              },
              false,
              'fetchCountry/error',
            )

            toast.error('Ошибка при загрузке Country')
            console.error('Ошибка при загрузке Country:', error)
          }
        },
      }
    )),
  ),
)
