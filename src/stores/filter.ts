import { Region } from 'types/regions'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type Filter = {
  search: string
  region: Region | ''
  sortMode: string | null
}

export const useFilter = create<Filter>()(
  devtools(
    immer((set) => ({
      search: '',
      region: '',
      sortMode: null,
    }))
  )
)
