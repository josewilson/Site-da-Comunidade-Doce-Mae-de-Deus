import DonationForm from '../components/DonationForm'

function CadastroDoacao() {
  return (
    <section>
      <h2 className="h3">Cadastro de Doação</h2>
      <p className="text-muted">Preencha seus dados e valor desejado.</p>
      <div className="card shadow-sm">
        <div className="card-body">
          <DonationForm />
        </div>
      </div>
    </section>
  )
}

export default CadastroDoacao

