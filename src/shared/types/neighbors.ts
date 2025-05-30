export type NeighborsState = {
  neighbors: string[]
  fetchNeighbors: (codes: string[]) => Promise<void>
}
