import { toast } from 'react-toastify'
import { BASE_URL } from '@api/config'
import { ApiCountry, Country } from 'types/countries'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { createCountry } from '@utils/createCountry'

type CountryState = {
  country: Country | null
  isLoading: boolean
  fetchCountry: (countryName: string) => Promise<void>
}

export const useCountry = create<CountryState>()(
  devtools(
    immer((set) => ({
      country: null,
      isLoading: false,

      fetchCountry: async (countryName: string) => {
        set(
          (state) => {
            state.isLoading = true
          },
          false,
          'fetchCountry/loadingStart'
        )

        try {
          const res = await fetch(
            BASE_URL + 'name/' + countryName
          )
          const data = (await res.json()) as ApiCountry[]

          set(
            (state) => {
              state.country = createCountry(data)

              state.isLoading = false
            },
            false,
            'fetchCountry/success'
          )
        } catch (error) {
          set(
            (state) => {
              state.isLoading = false
            },
            false,
            'fetchCountry/error'
          )

          toast.error('Ошибка при загрузке Country')
          console.error('Ошибка при загрузке Country:', error)
        }
      },
    }))
  )
)
