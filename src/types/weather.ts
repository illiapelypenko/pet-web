interface SubWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface WeatherInfo {
  dt: number
  sunrise: number
  sunset: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Array<SubWeather>
}

export interface WeatherDaily extends WeatherInfo {
  moonrise: number
  moonset: number
  moon_phase: number
  pop: number
  snow: number
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
}

export interface WeatherForecast {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  locationName: string
  current: {
    temp: number
    feels_like: number
    visibility: number
  } & WeatherInfo

  daily: Array<WeatherDaily>
}
