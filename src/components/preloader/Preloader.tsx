import { FC } from 'react'
import { ReactComponent as Spinner } from '@img/spinner_transparent.svg'

export const Preloader: FC = () => {
  return (
    <div className="preloader-block">
      <Spinner />
    </div>
  )
}
