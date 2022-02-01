import React, { useEffect, useState } from 'react'
import { WeatherForecast } from 'types'
import { WeatherList } from 'components'
import cs from 'classnames'
import containerStyles from 'styles/containers.module.css'
import styles from './Saved.module.css'

export const Saved = () => {
  const [savedItems, setSavedItems] = useState<Array<WeatherForecast>>([])

  useEffect(() => {
    const items = []

    for (const i in localStorage) {
      const item = localStorage.getItem(i)
      item && items.push(JSON.parse(item) as WeatherForecast)
    }

    setSavedItems(items)
  }, [])

  return (
    <div className={cs(containerStyles.pageContent, styles.pageContent)}>
      <WeatherList weatherList={savedItems} />
    </div>
  )
}
