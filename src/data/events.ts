import type { EventItem } from '../types'

export const events: EventItem[] = [
  {
    id: '1',
    title: 'Missa de Ação de Graças',
    date: new Date().toISOString(),
    description: 'Celebração especial com a comunidade e convidados.',
    location: 'Igreja Matriz',
    image: 'https://placehold.co/600x300?text=Missa'
  },
  {
    id: '2',
    title: 'Feira Solidária',
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    description: 'Arrecadação de alimentos e roupas para famílias.',
    location: 'Salão Paroquial',
    image: 'https://placehold.co/600x300?text=Feira+Solidaria'
  }
]

