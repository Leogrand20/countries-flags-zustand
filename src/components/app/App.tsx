import { Route, Routes } from 'react-router'

import { Header } from '../../layouts/Header'
import { Main } from '../../layouts/Main'
import { Details } from '../../pages/Details'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'
import { Error } from '../error/Error'

import './App.css'

export const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>

      <Error />
    </>
  )
}
