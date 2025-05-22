import { toast } from 'react-toastify'
import { BASE_URL } from '@api/config'
import { Country } from 'types/countries'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

type NeighborsState = {
  neighbors: string[]
  fetchNeighbors: (codes: string[]) => Promise<void>
}

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
              state.neighbors = data.map((country: Country) => country.name?.common).toSorted()
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
