import { BASE_URL } from '@shared-api/config'
import { Country } from '@shared-types/countries'
import { NeighborsState } from '@shared-types/neighbors'
import { toast } from 'react-toastify'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

export const useNeighbors = create<NeighborsState>()(
  devtools(
    immer((set) => ({
      neighbors: [],

      fetchNeighbors: async (codes: string[]) => {
        try {
          const res = await fetch(BASE_URL + 'alpha?codes=' + codes.join(','))
          const data = await res.json()

          set(
            (state) => {
              state.neighbors = data
                .map((country: Country) => country.name?.common)
                .toSorted()
            },
            false,
            'fetchNeighbors/success'
          )
        } catch (error) {
          toast.error('Ошибка при загрузке Neighbors')
          console.error('Ошибка при загрузке Neighbors:', error)
        }
      },
    }))
  )
)
