import React from 'react'
import cs from 'classnames'
import { Search, WeatherBlock } from 'components'
import containerStyles from 'styles/containers.module.css'
import styles from './SearchPage.module.css'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { WeatherList } from 'components/Weather/WeatherList/WeatherList'

export const SearchPage = () => {
  const latestWeather = useSelector(
    (state: RootState) => state.weather.weather[state.weather.latestSearchedLocationName]
  )
  const weatherList = useSelector((state: RootState) =>
    Object.values(state.weather.weather).filter(item => item.locationName !== 'currentLocation')
  )

  return (
    <div className={cs(containerStyles.pageContent, styles.pageContent)}>
      <Search />
      {latestWeather && <WeatherBlock weather={latestWeather} className={styles.latestWeather} />}
      <h1 className={styles.latestSearch}>Latest searches:</h1>
      <WeatherList weatherList={weatherList.reverse()} />
    </div>
  )
}
