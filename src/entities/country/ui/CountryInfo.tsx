import { useEffect } from 'react'
import { type NavigateFunction, useNavigate } from 'react-router-dom'

import { Preloader } from '@shared/ui/Preloader/Preloader'
import { useCountry } from '@entities/country/model/country.ts'
import { useNeighbors } from '@entities/country/model/neighbors.ts'

import styles from './Countries.module.css'

export const CountryInfo = () => {
  const navigate: NavigateFunction = useNavigate()
  const country = useCountry(state => state.country)
  const neighbors = useNeighbors(state => state.neighbors)
  const fetchNeighbors = useNeighbors(state => state.fetchNeighbors)
  const isLoading = useCountry(state => state.isLoading)

  useEffect(() => {
    if (!country?.borders || country.borders.length === 0) return

    void fetchNeighbors(country.borders)
  }, [country, fetchNeighbors])

  // Показываем спиннер во время загрузки
  if (isLoading) {
    return <Preloader />
  }

  // Проверка на наличие данных
  if (!country) {
    return <p>Нет данных по стране</p>
  }

  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    tld = [],
    currencies = {},
    languages = {},
  } = country

  let formattedPopulation = ''

  if (population) {
    formattedPopulation = new Intl.NumberFormat('ru-Ru').format(population)
  }

  return (
    <section className={styles.countryInfo}>
      <img
        className={styles.countryInfoImg}
        src={flags?.png}
        alt={flags?.alt}
      />

      <div className="info">
        <h1 className={styles.countryInfoTitle}>{name?.common}</h1>

        <div className={styles.countryInfoData}>
          <ul className={styles.countryDataList}>
            <li className={styles.countryDataListItem}>
              <strong>Native Name:</strong> {name?.official}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Population</strong> {formattedPopulation}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Region:</strong> {region}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Sub Region:</strong> {subregion}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>

          <ul className={styles.countryDataList}>
            <li className={styles.countryDataListItem}>
              <strong>Top Level Domain: </strong> {tld[0]}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Currencies: </strong>
              {Object.values(currencies)[0]?.name}
            </li>
            <li className={styles.countryDataListItem}>
              <strong>Languages: </strong>
              {Object.values(languages).join(', ')}
            </li>
          </ul>
        </div>

        <div className={styles.countryInfoMeta}>
          <strong>Border Countries: </strong>

          {country.borders && !country.borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles.countryInfoMetaTags}>
              {neighbors.map((neighbor: string, i) => (
                <span
                  key={i}
                  className={styles.countryInfoMetaTagsSpan}
                  onClick={() =>
                    navigate(
                      `/country/${neighbor.toLowerCase().split(' ').join('?')}`,
                      { relative: 'path' },
                    )
                  }
                >
                  {neighbor}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
