import { Header } from '@shared-layouts/Header'
import { Main } from '@shared-layouts/Main'
import { Details } from '@shared-pages/Details'
import { Home } from '@shared-pages/Home'
import { NotFound } from '@shared-pages/NotFound'
import { Route, Routes } from 'react-router'
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
