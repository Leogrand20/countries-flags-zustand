import { v4 as uuidv4 } from 'uuid'

import { ApiCountry, Country } from '@shared/types/countries'

export const createCountry = (countryArray: ApiCountry[]): Country => {
  if (!countryArray.length) {
    throw new Error('Empty country array')
  }

  return {
    ...countryArray[0],
    id: uuidv4(),
  }
}
