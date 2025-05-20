import { FC, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { NavigateFunction, useNavigate, useParams } from 'react-router'

import { useCountry } from '@stores/country'
import { CountryInfo } from '../components/countries/CountryInfo'
import { Preloader } from '../components/preloader/Preloader'

export const Details: FC = () => {
  const { countryName } = useParams()
  const isLoading = useCountry((state) => state.isLoading)
  const fetchCountry = useCountry((state) => state.fetchCountry)
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (countryName) {
      fetchCountry(countryName)
    }
  }, [countryName])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isLoading ? <Preloader /> : <CountryInfo />}
    </>
  )
}
