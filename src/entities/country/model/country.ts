import { toast } from 'react-toastify'
import axios from 'axios'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { BASE_URL } from '@shared/api/config'
import { type Countries, type CountryState } from '@shared/types/countries'
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
            const { data } = await axios<Countries>(BASE_URL + 'name/' + countryName)

            set(
              state => {
                state.isLoading = false
                state.country = createCountry(data[0])
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
