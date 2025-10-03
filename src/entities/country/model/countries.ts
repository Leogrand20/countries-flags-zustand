import axios from 'axios'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { BASE_URL } from '@shared/api/config'
import { type Countries, type CountriesState } from '@shared/types/countries'
import { createCountry } from '@entities/country/lib/createCountry.ts'
import { useError } from '@entities/country/model/error.ts'

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
            const { data } = await axios<Countries>(BASE_URL + 'all?fields=name,capital,flags,population,region')

            set(
              state => {
                state.countries = createCountry(data)
                state.isLoading = false
              },
              false,
              'fetchCountries/success',
            )
          } catch (error) {
            if (error instanceof Error) {
              set(
                state => {
                  state.isLoading = false
                },
                false,
                'fetchCountries/error',
              )

              useError.getState().setError('Ошибка при загрузке Countries')
            }
          }
        },
      }
    )),
  ),
)
