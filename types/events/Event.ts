export type Organization = {
  id: string
  name: string
  url?: string
  address?: any
}

export type Offer = {
  url: string
  price: number
  priceCurrency: string
}

export type GeoCoordinates = {
  latitude: number
  longitude: number
}

export type PostalAddress = {
  streetAddress: string
  addressLocality: string
  addressRegion?: string
  postalCode: string
  addressCountry: string
}

export type Place = {
  id: string
  name: string
  address: PostalAddress
  geo?: GeoCoordinates
}

export type Event = {
  id: string
  name: string
  startDate: Date
  endDate?: Date
  sponsor?: Organization
  offers?: Offer[]
  location?: Place
  eventAttendanceMode?:
    | 'OnlineEventAttendanceMode'
    | 'OfflineEventAttendanceMode'
    | 'MixedEventAttendanceMode'
  description?: string
  image?: string
  url?: string
  featured: boolean
}

export type EventsResponse = {
  events: Event[]
  meta: {
    total: number
  }
}
