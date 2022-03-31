import React, { SyntheticEvent, useEffect, useState } from 'react'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Icon, Spinner } from 'components'
import { useDebounce } from 'hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations, getWeatherForecast, RootState, setLatestSearchedLocation } from 'store'
import styles from './Search.module.css'

const locationsSelector = (searchValue: string) => (state: RootState) =>
  Object.values(state.location.locations).filter(location => location.foundBy === searchValue)

export const Search = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const debouncedSearchValue = useDebounce(text)

  const locations = useSelector(locationsSelector(debouncedSearchValue))
  const isPending = useSelector((state: RootState) => state.location.pendings.searchLocation)

  useEffect(() => {
    debouncedSearchValue.length > 2 && dispatch(getLocations(debouncedSearchValue))
  }, [debouncedSearchValue])

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const handleSearchItemClick = async (item: any) => {
    dispatch(setLatestSearchedLocation({ locationName: item.label }))
    dispatch(getWeatherForecast(item.label))
    setShowPreview(false)
    setText('')
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    // positionstackApi.getCoordinates(text).then(console.log)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              value={text}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter location, at least 3 characters long"
              onFocus={() => setShowPreview(true)}
            />
            <button type="reset" className={styles.button} onClick={() => setText('')}>
              <Icon icon={faXmark} size="2x" />
            </button>
          </div>
          <button type="submit" className={styles.button}>
            <Icon icon={faMagnifyingGlass} size="2x" />
          </button>
        </form>
        {isPending && (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
        {showPreview && (
          <ul className={styles.searchResults}>
            {locations.map(item => (
              <li className={styles.searchResultItem} key={item.label} onClick={() => handleSearchItemClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
