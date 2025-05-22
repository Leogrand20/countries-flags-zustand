import { Countries, Country } from '@shared-types/countries'
import { v4 as uuidv4 } from 'uuid'

export const createCountries = (countries: Countries) =>
  countries.map((country: Country) => {
    return {
      ...country,
      id: uuidv4(),
    }
  })
