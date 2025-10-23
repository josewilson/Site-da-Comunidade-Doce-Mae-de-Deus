import EventCard from '../components/EventCard'
import { useEvents } from '../hooks/useEvents'

function Home() {
  const events = useEvents()
  return (
    <section>
      <div className="mb-4">
        <h2 className="h3">Bem-vindos à Comunidade Doce Mãe de Deus</h2>
        <p className="text-muted">
          Participe das nossas atividades, eventos e ações de solidariedade.
          Juntos fortalecemos nossa fé e serviço ao próximo.
        </p>
      </div>
      <h3 className="h4">Próximos Eventos</h3>
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

export default Home
