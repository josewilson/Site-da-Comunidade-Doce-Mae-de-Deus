import EventCard from '../components/EventCard'
import { useEvents } from '../hooks/useEvents'

function Eventos() {
  const events = useEvents()

  return (
    <section>
      <h2 className="h3">Eventos</h2>
      <p className="text-muted">Confira nossa agenda completa de eventos e atividades.</p>
      <div className="row g-3">
        {events.map(ev => (
          <div className="col-12 col-sm-6 col-lg-4" key={ev.id}>
            <EventCard event={ev} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Eventos
