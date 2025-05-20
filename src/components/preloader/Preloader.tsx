import { ReactComponent as Spinner } from '@img/spinner_transparent.svg'
import { FC } from 'react'

export const Preloader: FC = () => {
  return (
    <div className="preloader-block">
      <Spinner />
    </div>
  )
}
