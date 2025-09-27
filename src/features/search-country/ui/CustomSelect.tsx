import Select, { type StylesConfig } from 'react-select'

import { useRegion } from '@shared/hooks/useRegion'
import { type RegionOptions, type RegionOptionsMap } from '@shared/types/regions'

import styles from './Search.module.css'

const optionsMap: RegionOptionsMap = {
  '': { value: '', label: '' },
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
}

const options = Object.values(optionsMap)

const selectStyles: StylesConfig<RegionOptions, false> = {
  control: (provided) => ({
    ...provided,
    height: '50px',
    border: 'none',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    color: 'var(--colors-text)',
    backgroundColor: 'var(--colors-ui-base)',
    boxShadow: 'var(--shadow)',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text)',
    backgroundColor: state.isSelected
      ? 'var(--colors-bg)'
      : 'var(--colors-ui-base)',
  }),
}

export const CustomSelect = () => {
  const [region, setRegion] = useRegion() // region: Region | '', setRegion: OnSelectHandler

  return (
    <Select<RegionOptions, false>
      placeholder="Filter by Region"
      className={styles.select}
      options={options}
      value={region ? optionsMap[region] : null} // ✅ string -> RegionOptions | null
      onChange={setRegion} // ✅ OnSelectHandler совпадает с onChange
      isClearable
      isSearchable={false}
      styles={selectStyles}
    />
  )
}
