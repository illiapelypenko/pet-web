import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import styles from './Icon.module.css'

export const Icon: React.FC<FontAwesomeIconProps> = props => <FontAwesomeIcon {...props} className={styles.icon} />
