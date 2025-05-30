import { Region } from './regions'

export type SearchProps = {
  onSearch: (
    search: string,
    region: Region | '',
    sortMode: string | null
  ) => void
}
