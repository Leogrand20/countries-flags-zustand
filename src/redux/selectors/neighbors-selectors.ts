import { RootState } from '../store'

export const selectNeighbors = (state: RootState) => state.neighbors.neighbors
