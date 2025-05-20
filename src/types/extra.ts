import { Axios } from 'axios'

import * as api from '../api/config'

export type Extra = {
  client: Axios
  api: typeof api
}
