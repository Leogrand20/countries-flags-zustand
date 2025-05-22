import { ApiCountry, Country } from '@shared-types/countries'
import { v4 as uuidv4 } from 'uuid'

export const createCountry = (countryArray: ApiCountry[]): Country => {
  if (!countryArray.length) {
    throw new Error('Empty country array')
  }

  return {
    ...countryArray[0],
    id: uuidv4(),
  }
}
