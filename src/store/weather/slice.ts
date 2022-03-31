import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { WeatherForecast } from 'types'

export interface WeatherState {
  currentCity: string
  latestSearchedLocationName: string
  weather: {
    [locationName: string]: WeatherForecast
  }
  pendings: {
    [locationName: string]: boolean
  }
  errors: {
    [locationName: string]: AxiosError | null
  }
}

const initialState: WeatherState = {
  currentCity: 'Kyiv',
  latestSearchedLocationName: '',
  weather: {},
  pendings: {},
  errors: {},
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherPending: (state, action: PayloadAction<{ locationName: string; pending: boolean }>) => {
      const { locationName, pending } = action.payload

      state.pendings[locationName] = pending
    },
    setWeatherError: (state, action: PayloadAction<{ locationName: string; error: AxiosError | null }>) => {
      const { locationName, error } = action.payload

      state.errors[locationName] = error
    },
    setCurrentCity: (state, action: PayloadAction<{ locationName: string }>) => {
      state.currentCity = action.payload.locationName
    },
    setWeather: (state, action: PayloadAction<{ locationName: string; weather: WeatherForecast }>) => {
      const { locationName, weather } = action.payload

      state.weather[locationName] = { ...weather, locationName }
    },
    setLatestSearchedLocation: (state, action: PayloadAction<{ locationName: string }>) => {
      state.latestSearchedLocationName = action.payload.locationName
    },
  },
})

export const { setWeatherPending, setWeatherError, setCurrentCity, setWeather, setLatestSearchedLocation } =
  weatherSlice.actions

export const weatherReducer = weatherSlice.reducer
