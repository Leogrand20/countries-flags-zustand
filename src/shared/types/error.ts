export type ErrorState = {
  error: string
}

export type ErrorActions = {
  setError: (errorMessage: string) => void
  clearError: () => void
}

export type ErrorStore = ErrorState & ErrorActions