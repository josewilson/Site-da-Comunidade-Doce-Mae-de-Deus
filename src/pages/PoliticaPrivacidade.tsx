import Breadcrumbs from '../components/Breadcrumbs'

function PoliticaPrivacidade() {
  return (
    <section>
      <Breadcrumbs />
      <h2 className="h3">Política de Privacidade</h2>
      <p className="text-muted">Valorizamos sua privacidade. As informações coletadas por meio dos formulários neste site são utilizadas exclusivamente para fins de comunicação institucional e gestão de doações, conforme seu consentimento.</p>
      <ul>
        <li>Dados coletados: nome, e-mail, telefone e, quando informado, CPF/CNPJ e endereço.</li>
        <li>Uso: comunicação, agradecimentos, emissão de comprovantes e relatórios internos.</li>
        <li>Compartilhamento: não compartilhamos dados com terceiros, exceto provedores de pagamento quando necessário para processar doações.</li>
        <li>Direitos do titular: solicite correção ou exclusão de dados via contato@docemaededeus.org.</li>
      </ul>
    </section>
  )
}

export default PoliticaPrivacidade

