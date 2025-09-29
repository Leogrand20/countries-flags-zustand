import { type FC } from 'react'
import { ToastContainer, type ToastContainerProps } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Toaster: FC<ToastContainerProps> = (props) => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    {...props} // чтобы при необходимости можно было переопределять
  />
)

