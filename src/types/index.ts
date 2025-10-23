export type EventItem = {
  id: string
  title: string
  date: string // ISO
  description: string
  location?: string
  image?: string
}

export type Donation = {
  name: string
  email: string
  phone?: string
  amount: number
  message?: string
}

