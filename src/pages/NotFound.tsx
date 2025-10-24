import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="text-center py-5">
      <h1 className="display-5">404</h1>
      <p className="text-muted mb-3">Página não encontrada.</p>
      <Link className="btn btn-primary" to="/">Voltar ao início</Link>
    </section>
  )
}

export default NotFound

