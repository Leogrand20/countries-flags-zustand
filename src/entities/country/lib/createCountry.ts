import { v7 as uuidv7 } from 'uuid'

import { type Countries, type Country } from '@shared/types/countries'

export const createCountry = <T extends Country | Countries>(data: T): T =>
Array.isArray(data)
  ? (data.map(country => ({...country, id: uuidv7()})) as T)
  : ({...data, id: uuidv7()})