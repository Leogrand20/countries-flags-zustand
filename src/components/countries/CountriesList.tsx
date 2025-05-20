import { CountriesItem } from './CountriesItem'

import { useCountries } from '@stores/countries'
import styles from './Countries.module.css'

export const CountriesList = () => {
  const countries = useCountries((state) => state.countries)

  return (
    <>
      <section className={styles['countriesItems']}>
        {countries.map((country) => (
          <CountriesItem key={country.id} {...country} />
        ))}
      </section>
    </>
  )
}
