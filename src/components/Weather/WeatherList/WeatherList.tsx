import React from 'react'
import { WeatherForecast } from 'types'
import { WeatherBlock } from '../WeatherBlock/WeatherBlock'
import styles from './WeatherList.module.css'

interface Props {
  weatherList: Array<WeatherForecast>
}

export const WeatherList: React.FC<Props> = ({ weatherList }) => (
  <ul className={styles.list}>
    {weatherList.map(weather => (
      <WeatherBlock key={weather.locationName} weather={weather} />
    ))}
  </ul>
)
