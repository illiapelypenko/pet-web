export interface Location {
  latitude: number
  longitude: number
  type: string | null
  name: string | null
  number: unknown | null
  postal_code: unknown | null
  street: unknown | null
  confidence: number | null
  region: string | null
  region_code: string | null
  county: string | null
  locality: string | null
  administrative_area: string | null
  neighbourhood: string | null
  country: string | null
  country_code: string | null
  continent: string | null
  label: string
  foundBy: string
}
