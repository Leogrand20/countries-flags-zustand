import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { selectCountry } from '../../redux/selectors/country-selectors'
import { selectNeighbors } from '../../redux/selectors/neighbors-selectors'
import { fetchNeighbors } from '../../redux/slices/neighborsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import styles from './Countries.module.css'

export const CountryInfo: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const country = useAppSelector(selectCountry)
  const neighbors = useAppSelector(selectNeighbors)

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
    borders = [],
  } = country

  let formattedPopulation = ''

  if (population) {
    formattedPopulation = new Intl.NumberFormat('ru-Ru').format(population)
  }

  useEffect(() => {
    if (borders.length) {
      dispatch(fetchNeighbors(borders))
    }
  }, [borders, dispatch])

  return (
    <section className={styles['countryInfo']}>
      <img
        className={styles['countryInfoImg']}
        src={flags?.png}
        alt={flags?.alt}
      />

      <div className="info">
        <h1 className={styles['countryInfoTitle']}>{name?.common}</h1>

        <div className={styles['countryInfoData']}>
          <ul className={styles['countryDataList']}>
            <li className={styles['countryDataListItem']}>
              <strong>Native Name:</strong> {name?.official}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Population</strong> {formattedPopulation}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Region:</strong> {region}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Sub Region:</strong> {subregion}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>

          <ul className={styles['countryDataList']}>
            <li className={styles['countryDataListItem']}>
              <strong>Top Level Domain: </strong> {tld[0]}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Currencies: </strong>
              {Object.values(currencies)[0]?.name}
            </li>
            <li className={styles['countryDataListItem']}>
              <strong>Languages: </strong>
              {Object.values(languages).join(', ')}
            </li>
          </ul>
        </div>

        <div className={styles['countryInfoMeta']}>
          <strong>Border Countries: </strong>

          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className={styles['countryInfoMetaTags']}>
              {neighbors.map((neighbor: string) => (
                <span
                  key={neighbor}
                  className={styles['countryInfoMetaTagsSpan']}
                  onClick={() =>
                    navigate(
                      `/country/${neighbor.toLowerCase().split(' ').join('?')}`,
                      { relative: 'path' }
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
