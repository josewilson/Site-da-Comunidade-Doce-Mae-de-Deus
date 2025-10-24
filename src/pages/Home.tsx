import EventCard from '../components/EventCard'
import { useEvents } from '../hooks/useEvents'
import { Link } from 'react-router-dom'

function Home() {
  const events = useEvents()
  return (
    <section>
      <div className="hero mb-4">
        <h1 className="display-6 mb-2">Bem-vindos à Comunidade Doce Mãe de Deus</h1>
        <p className="text-muted mb-3">Participe das nossas atividades, eventos e ações de solidariedade. Juntos fortalecemos nossa fé e serviço ao próximo.</p>
        <div className="d-flex gap-2">
          <Link className="btn btn-primary" to="/amigo-evangelizador">Seja Amigo Evangelizador</Link>
          <Link className="btn btn-outline-primary" to="/doacao">Fazer uma Doação</Link>
        </div>
      </div>
      <h3 className="h5 section-title">Próximos Eventos</h3>
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
