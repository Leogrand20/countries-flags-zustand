import Select, { Props } from 'react-select'

import { useRegion } from '../../hooks/useRegion'
import { RegionOptions, RegionOptionsMap } from '../../types/regions'

import styles from './Search.module.css'

const optionsMap: RegionOptionsMap = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
}

const options = Object.values(optionsMap)

const RegionSelect = (props: Props<RegionOptions, false>) => (
  <Select {...props} />
)

export const CustomSelect = () => {
  const [region, setRegion] = useRegion()

  return (
    <RegionSelect
      placeholder="Filter by Region"
      className={styles['select']}
      options={options}
      value={region ? optionsMap[region] : ''}
      onChange={setRegion}
      isClearable
      isSearchable={false}
      styles={{
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
      }}
    />
  )
}
