import { Dispatch } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { positionstackApi } from 'api'
import { setFoundLocations, setLocationError, setLocationPending } from './slice'

export const getLocations = (location: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLocationError({ queryKey: 'searchLocation', error: null }))
    dispatch(setLocationPending({ queryKey: 'searchLocation', pending: true }))
    const {
      data: { data: locations },
    } = await positionstackApi.getCoordinates(location)

    dispatch(
      setFoundLocations({
        locations: locations
          .filter(item => item.label && item.latitude && item.longitude)
          .map(item => ({ ...item, foundBy: location })),
      })
    )
  } catch (error) {
    dispatch(setLocationError({ queryKey: 'searchLocation', error: error as AxiosError }))
  } finally {
    dispatch(setLocationPending({ queryKey: 'searchLocation', pending: false }))
  }
}
