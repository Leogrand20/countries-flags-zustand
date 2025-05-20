import { Region } from './regions'

export type FilterSlice = {
  search: string
  region: Region | ''
  sortMode: string | null
}
