import { type Region } from '@shared/types/regions.ts'

export type SearchProps = {
  onSearch: (
    search: string,
    region: Region | '',
    sortMode: string | null
  ) => void
}
