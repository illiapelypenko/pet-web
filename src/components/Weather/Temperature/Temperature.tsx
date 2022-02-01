import React from 'react'
import styles from './Temperature.module.css'

interface Props {
  temperature: number
}

export const Temperature: React.FC<Props> = ({ temperature }) => (
  <span className={styles.container}>
    <span className={styles.temperature}>{temperature.toFixed(0)}</span>
    <span className={styles.celsius}>°C</span>
  </span>
)
