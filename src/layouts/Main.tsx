import { FC } from 'react'

import { MainProps } from '../types/main'

import './Main.Module.css'

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="container">{children}</div>
    </main>
  )
}
