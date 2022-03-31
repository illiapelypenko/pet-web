import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationBar.module.css'

export const NavigationBar = () => (
  <nav className={styles.container}>
    <Link to="/" className={styles.navLink}>
      Main
    </Link>
    <Link to="/saved" className={styles.navLink}>
      Saved
    </Link>
  </nav>
)
