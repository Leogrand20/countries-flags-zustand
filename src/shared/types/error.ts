type ErrorState = {
  error: string
}

type ErrorActions = {
  setError: (errorMessage: string) => void
  clearError: () => void
}

export type ErrorStore = ErrorState & ErrorActions