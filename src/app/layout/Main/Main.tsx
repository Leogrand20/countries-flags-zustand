import { FC } from 'react'

import { MainProps } from '@shared/types/main'

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="container">{children}</div>
    </main>
  )
}
