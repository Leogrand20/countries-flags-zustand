import { v7 as uuidv7 } from 'uuid'

import { type ApiCountry, type Country } from '@shared/types/countries'

export const createCountry = (countryArray: ApiCountry[]): Country => {
  if (!countryArray.length) {
    throw new Error('Empty country array')
  }

  return {
    ...countryArray[0],
    id: uuidv7(),
  }
}
