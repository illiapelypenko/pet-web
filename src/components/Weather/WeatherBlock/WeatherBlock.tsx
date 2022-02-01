import React, { useEffect, useState } from 'react'
import { WeatherForecast } from 'types'
import { Icon, Temperature } from 'components'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import styles from './WeatherBlock.module.css'
import cs from 'classnames'

interface Props {
  weather: WeatherForecast
  className?: string
}

export const WeatherBlock: React.FC<Props> = ({ weather, className }) => {
  const {
    locationName,
    timezone,
    current: {
      temp,
      feels_like: feelsLike,
      visibility,
      sunset,
      sunrise,
      pressure,
      humidity,
      wind_speed: windSpeed,
      wind_deg: windDegree,
      wind_gust: windGust,
    },
  } = weather

  const [isSaved, setIsSaved] = useState(false)
  useEffect(() => {
    setIsSaved(!!localStorage.getItem(weather.locationName))
  }, [])

  const saveWeather = () => {
    if (!isSaved) {
      localStorage.setItem(weather.locationName, JSON.stringify(weather))
      setIsSaved(true)
    } else {
      localStorage.removeItem(weather.locationName)
      setIsSaved(false)
    }
  }

  return (
    <div className={cs(styles.container, className)}>
      <div className={styles.star} onClick={saveWeather}>
        <Icon icon={isSaved ? faStarSolid : faStar} color={isSaved ? 'yellow' : 'black'} />
      </div>
      <div className={styles.header}>
        <span className={styles.cityName}>{locationName}</span>
        <Temperature temperature={temp} />
      </div>
      <div className={styles.temperatureBlock}>
        {/*<span>*/}
        {/*  min: <Temperature temperature={tempMin} />*/}
        {/*</span>*/}
        {/*<span>*/}
        {/*  max: <Temperature temperature={tempMax} />*/}
        {/*</span>*/}
        <span>
          feels like: <Temperature temperature={feelsLike} />
        </span>
      </div>
      <div className={styles.block}>
        <span>Visibility: {visibility / 100}%</span>
      </div>
      <div className={styles.block}>
        <span>Pressure: {pressure}</span>
      </div>
      <div className={styles.block}>
        <span>Humidity: {humidity}</span>
      </div>
      <div className={styles.windBlock}>
        <span>Wind</span>
        <span>speed: {windSpeed}</span>
        <span>degree: {windDegree}</span>
        <span>gust: {windGust}</span>
      </div>
    </div>
  )
}
