import { type ChangeEventHandler } from 'react'
import { type SingleValue } from 'react-select'

import { type RegionOptions } from '@shared/types/regions.ts'

export type OnSearchHandler = ChangeEventHandler<HTMLInputElement>

export type OnCheckboxHandler = ChangeEventHandler<HTMLInputElement>

export type OnSelectHandler = (reg: SingleValue<RegionOptions>) => void
