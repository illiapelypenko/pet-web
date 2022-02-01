import { Dispatch } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { weatherApi } from 'api'
import { setWeather, setWeatherError, setWeatherPending } from './slice'
import { GetState } from 'store'

export const getWeatherForecast = (locationName: string) => async (dispatch: Dispatch, getState: GetState) => {
  try {
    dispatch(setWeatherError({ locationName, error: null }))
    dispatch(setWeatherPending({ locationName, pending: true }))
    const location = getState().location.locations[locationName]

    const { data: weather } = await weatherApi.getWeatherForecast({ lat: location.latitude, lon: location.longitude })

    dispatch(setWeather({ locationName, weather }))
  } catch (error) {
    dispatch(setWeatherError({ locationName, error: error as AxiosError }))
  } finally {
    dispatch(setWeatherPending({ locationName, pending: false }))
  }
}

export const getCurrentWeather =
  ({ latitude, longitude }: { latitude: number; longitude: number }) =>
  async (dispatch: Dispatch) => {
    try {
      const { data: weather } = await weatherApi.getWeatherForecast({ lat: latitude, lon: longitude })

      dispatch(setWeather({ locationName: 'currentLocation', weather }))
    } catch {}
  }
