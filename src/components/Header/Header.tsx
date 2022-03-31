import React from 'react'
import { NavigationBar, Temperature } from 'components'
import styles from './Header.module.css'
import { useCurrentWeather } from 'hooks/useCurrentWeather'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Header = () => {
  useCurrentWeather()

  const currentWeather = useSelector((state: RootState) => state.weather.weather['currentLocation'])

  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>WEATHER REPORT</h1>
      {currentWeather && (
        <div className={styles.currentWeather}>
          <p>{currentWeather.timezone}:</p>
          <p>
            <Temperature temperature={currentWeather.current.temp} />
          </p>
        </div>
      )}
      <NavigationBar />
    </header>
  )
}
