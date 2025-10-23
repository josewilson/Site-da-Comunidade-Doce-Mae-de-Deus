import type { EventItem } from '../types'
import { useEffect, useState } from 'react'

let cache: EventItem[] | null = null
let inFlight: Promise<EventItem[]> | null = null

async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch('/events.json', { cache: 'force-cache' })
  if (!res.ok) throw new Error('Failed to load events')
  return res.json()
}

export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>(() => cache ?? [])

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        if (cache) {
          if (!cancelled) setEvents(cache)
          return
        }
        inFlight = inFlight ?? fetchEvents()
        const data = await inFlight
        cache = data
        inFlight = null
        if (!cancelled) setEvents(data)
      } catch {
        if (!cancelled) setEvents([])
      }
    }

    void load()
    return () => { cancelled = true }
  }, [])

  return events
}

