import { v7 as uuidv7 } from 'uuid'

import { type Countries, type Country } from '@shared/types/countries'

export const createCountries = (countries: Countries) =>
  countries.map((country: Country) => {
    return {
      ...country,
      id: uuidv7(),
    }
  })
