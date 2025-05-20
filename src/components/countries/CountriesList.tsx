import { FC } from 'react'
import { CountriesListProps } from 'types/countries'
import styles from './Countries.module.css'
import { CountriesItem } from './CountriesItem'

export const CountriesList: FC<CountriesListProps> = ({ countries }) => {
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
