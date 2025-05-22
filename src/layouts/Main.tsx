import { MainProps } from '@shared-types/main'
import { FC } from 'react'
import './Main.Module.css'

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="container">{children}</div>
    </main>
  )
}
