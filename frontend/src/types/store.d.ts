export type Store = {
  id: string
  slug: string
  name: string
  address: {
    street: string
    city: string
    province: string
    country: string
  }
  phone: {
    countryCode: string
    number: string
  }
  email: string
  image: string
  timings: StoreTimings[]
}

export type StoreTimings = {
  day: number
  startHour: number | null
  startMinute: number | null
  endHour: number | null
  endMinute: number | null
  isClosed: boolean
}
