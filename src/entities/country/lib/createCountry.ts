import { v7 as uuidv7 } from 'uuid'

import { type Country } from '@shared/types/countries'

export const createCountry = (country: Country) => {
  return {
    ...country,
    id: uuidv7(),
  }
}
