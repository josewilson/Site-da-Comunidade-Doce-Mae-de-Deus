import type { EventItem } from '../types'
import { memo } from 'react'

type Props = {
  event: EventItem
}

function EventCard({ event }: Props) {
  return (
    <article className="card h-100">
      {event.image && (
        <img
          className="card-img-top"
          src={event.image}
          alt={event.title}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
        />
      )}
      <div className="card-body">
        <h3 className="h5 card-title mb-1">{event.title}</h3>
        <p className="text-muted small mb-2">
          {new Date(event.date).toLocaleDateString('pt-BR', {
            day: '2-digit', month: 'long', year: 'numeric'
          })}
        </p>
        <p className="card-text">{event.description}</p>
        {event.location && <p className="text-muted">Local: {event.location}</p>}
      </div>
    </article>
  )
}

export default memo(EventCard)
