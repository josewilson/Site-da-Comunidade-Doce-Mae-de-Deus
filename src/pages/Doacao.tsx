import { Link } from 'react-router-dom'

function Doacao() {
  return (
    <section>
      <h2 className="h3">Doação</h2>
      <p className="text-muted">Ajude nossa missão com sua contribuição.</p>
      <div className="list-group">
        <Link className="list-group-item list-group-item-action" to="/cadastro-doacao">Cadastrar uma doação</Link>
        <Link className="list-group-item list-group-item-action" to="/pix">Doar via PIX</Link>
        <Link className="list-group-item list-group-item-action" to="/boleto">Gerar boleto</Link>
      </div>
    </section>
  )
}

export default Doacao

