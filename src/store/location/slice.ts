import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Location } from 'types'

export type LocationQueryKeys = 'searchLocation'

export interface LocationState {
  locations: {
    [label: string]: Location
  }
  pendings: {
    [key in LocationQueryKeys]: boolean
  }
  errors: {
    [key in LocationQueryKeys]: AxiosError | null
  }
}

const initialState: LocationState = {
  locations: {},
  pendings: {
    searchLocation: false,
  },
  errors: {
    searchLocation: null,
  },
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationPending: (state, action: PayloadAction<{ queryKey: LocationQueryKeys; pending: boolean }>) => {
      const { queryKey, pending } = action.payload

      state.pendings[queryKey] = pending
    },
    setLocationError: (state, action: PayloadAction<{ queryKey: LocationQueryKeys; error: AxiosError | null }>) => {
      const { queryKey, error } = action.payload

      state.errors[queryKey] = error
    },
    setFoundLocations: (state, action: PayloadAction<{ locations: Array<Location> }>) => {
      for (const location of action.payload.locations) {
        state.locations[location.label] = location
      }
    },
  },
})

export const { setLocationPending, setLocationError, setFoundLocations } = locationSlice.actions

export const locationReducer = locationSlice.reducer
