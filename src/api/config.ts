const BASE_URL: string = 'https://restcountries.com/v3.1/'

const getAllCountries =
  BASE_URL + 'all?fields=name,capital,flags,population,region'

const getCountryByName = (countryName: string) =>
  BASE_URL + 'name/' + countryName

const getNeighborsCountries = (codes: string[]) =>
  BASE_URL + 'alpha?codes=' + codes.join(',')

export { getAllCountries, getCountryByName, getNeighborsCountries }
