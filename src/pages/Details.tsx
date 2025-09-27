import { useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { type NavigateFunction, useNavigate, useParams } from 'react-router-dom'

import { Preloader } from '@shared/ui/Preloader/Preloader'
import { useCountry } from '@entities/country/model/country'
import { CountryInfo } from '@entities/country/ui/CountryInfo'

export const Details = () => {
  const { countryName } = useParams()
  const isLoading = useCountry(state => state.isLoading)
  const fetchCountry = useCountry(state => state.fetchCountry)
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (countryName) {
      void fetchCountry(countryName)
    }
  }, [countryName, fetchCountry])

  return (
    <>
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>

      {isLoading ? <Preloader /> : <CountryInfo />}
    </>
  )
}
