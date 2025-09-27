import { Route, Routes } from 'react-router-dom'

import { Header } from '@app/layout/Header/Header'
import { Main } from '@app/layout/Main/Main'
import { Details } from '@pages/Details'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'

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
    </>
  )
}
