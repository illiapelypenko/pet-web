import React from 'react'
import cs from 'classnames'
import containerStyles from 'styles/containers.module.css'
import styles from './NoMatch.module.css'
import { Link } from 'react-router-dom'

export const NoMatch = () => (
  <div className={cs(containerStyles.pageContent, styles.pageContent)}>
    <Link to="/" className={styles.navLink}>
      Back to main page
    </Link>
  </div>
)
