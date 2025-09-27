import { type Region } from '@shared/types/regions.ts'

interface Flags {
  png: string
  alt: string
}

interface Name {
  common: string
  official: string
}

interface Currencies {
  [key: string]: {
    name: string
  }
}

interface Languages {
  [key: string]: string
}

export type Country = {
  id?: string
  flags?: Flags
  name?: Name
  capital?: string[]
  region?: Region
  subregion?: string
  population?: number
  tld?: string[]
  currencies?: Currencies
  borders?: string[]
  languages?: Languages
}

export type Countries = Country[]

export type ApiCountry = Omit<Country, 'id'>

export type CountriesItemProps = Pick<
  Country,
  'flags' | 'capital' | 'name' | 'population' | 'region'
>

export type CountriesListProps = {
  countries: Countries
}

export type CountriesState = {
  countries: Countries
  isLoading: boolean
  fetchCountries: () => Promise<void>
}

export type CountryState = {
  country: Country | null
  isLoading: boolean
  fetchCountry: (countryName: string) => Promise<void>
}
