import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentWeather } from 'store'

export const useCurrentWeather = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        dispatch(getCurrentWeather({ latitude, longitude }))
      })
  }, [])
}
