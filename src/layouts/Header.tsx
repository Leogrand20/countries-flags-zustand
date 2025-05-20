import { FC,useEffect, useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { Link } from 'react-router'

import { resetFilters } from '../redux/slices/filterSlice'
import { useAppDispatch } from '../redux/store'

import styles from './Header.module.css'

export const Header: FC = () => {
  const dispatch = useAppDispatch()
  const originalTheme: string = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState<string>(originalTheme)

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="header">
      <div className="container">
        <div className={styles['wrapper']}>
          <Link
            to="/"
            className={styles['titleLink']}
            onClick={() => dispatch(resetFilters())}
          >
            Where is the world?
          </Link>

          <div className={styles['modeSwitcher']} onClick={toggleTheme}>
            <IoMoon className={styles['ioMoon']} />

            <span className={styles['spanSwitcher']}>
              {theme === 'dark' ? 'light' : 'dark'} theme
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
