import { type FC, useEffect } from 'react'
import { toast, ToastContainer, type ToastContainerProps } from 'react-toastify'

import { useError } from '@entities/country/model/error.ts'

import 'react-toastify/dist/ReactToastify.css'

export const Toaster: FC<ToastContainerProps> = (props) => {
  const errorMessage = useError(state => state.error)
  const clearError = useError(state => state.clearError)

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      clearError()
    }
  }, [errorMessage, clearError])

  return (
    <>
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
    </>
  )
}
