import axios from 'axios'
import { BASE_POSITIONSTACK_API_URL } from 'config'
import { Location } from 'types'

const positionstackInstance = axios.create({
  baseURL: BASE_POSITIONSTACK_API_URL,
  params: {
    units: 'metric',
    access_key: process.env.REACT_APP_POSITIONSTACK_API_KEY,
  },
})

const getCoordinates = (cityName: string) =>
  positionstackInstance.get<{ data: Array<Location> }>('/forward', { params: { query: cityName } })

export const positionstackApi = { getCoordinates }
