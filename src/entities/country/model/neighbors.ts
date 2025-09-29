import axios from 'axios'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { BASE_URL } from '@shared/api/config'
import { type Countries, type Country } from '@shared/types/countries'
import { type NeighborsState } from '@shared/types/neighbors'

export const useNeighbors = create<NeighborsState>()(
  devtools(
    immer(set => (
      {
        neighbors: [],

        fetchNeighbors: async (codes: string[]) => {
          const { data } = await axios<Countries>(BASE_URL + 'alpha?codes=' + codes.join(','))

          set(
            state => {
              state.neighbors = data
                .map((country: Country) => country.name?.common)
                .filter((name): name is string => Boolean(name))
                .toSorted()
            },
            false,
            'fetchNeighbors/success',
          )
        },
      }
    )),
  ),
)
