import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'
import DonationForm from '../components/DonationForm'
import { loadBootstrap } from '../utils/bootstrap'

const amigoSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  cpf: z.string().min(11, 'CPF inválido').optional(),
  birth: z.string().optional(),
  cep: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
})

type AmigoForm = z.infer<typeof amigoSchema>

const boletoSchema = z.object({
  name: z.string().min(2, 'Informe o nome completo'),
  doc: z.string().min(11, 'CPF/CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  amount: z
    .number({ invalid_type_error: 'Informe um valor numérico' })
    .min(1, 'Valor mínimo é R$ 1'),
})

type BoletoForm = z.infer<typeof boletoSchema>

function AmigoEvangelizador() {
  const [ok, setOk] = useState<string | null>(null)
  const amigo = useForm<AmigoForm>({
    resolver: zodResolver(amigoSchema),
    defaultValues: { name: '', email: '', phone: '', cpf: '', birth: '', cep: '', address: '', city: '', state: '' }
  })

  const boleto = useForm<BoletoForm>({
    resolver: zodResolver(boletoSchema),
    defaultValues: { name: '', doc: '', email: '', amount: 50 }
  })

  function submitAmigo(values: AmigoForm) {
    console.log('Cadastro Amigo Evangelizador:', values)
    setOk('Cadastro enviado! (mock)')
    amigo.reset({ ...values })
  }

  const pixKey = 'SUA_CHAVE_PIX_AQUI' // substitua pela chave real

  function copyPix() {
    navigator.clipboard?.writeText(pixKey)
  }

  async function ensureTabs() {
    await loadBootstrap()
  }

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h2 className="h3 mb-0">Amigo Evangelizador</h2>
        <div className="btn-group" role="group" aria-label="Navegação seções">
          <a href="#cadastro" className="btn btn-outline-primary" onClick={() => ensureTabs()}>Cadastro</a>
          <a href="#doacoes" className="btn btn-outline-secondary" onClick={() => ensureTabs()}>Doações</a>
        </div>
      </div>

      <p className="text-muted">Seja Amigo Evangelizador: cadastre-se e escolha sua melhor forma de apoiar nossa missão.</p>

      <div id="cadastro" className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">Cadastro</div>
        <div className="card-body">
          {ok && <div className="alert alert-success" role="alert">{ok}</div>}
          <form onSubmit={amigo.handleSubmit(submitAmigo)} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Nome</label>
                <input className={`form-control ${amigo.formState.errors.name ? 'is-invalid' : ''}`} {...amigo.register('name')} />
                {amigo.formState.errors.name && <div className="invalid-feedback">{amigo.formState.errors.name.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">E-mail</label>
                <input type="email" className={`form-control ${amigo.formState.errors.email ? 'is-invalid' : ''}`} {...amigo.register('email')} />
                {amigo.formState.errors.email && <div className="invalid-feedback">{amigo.formState.errors.email.message}</div>}
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label">Telefone</label>
                <InputMask mask="(99) 99999-9999" className="form-control" onChange={(e) => amigo.setValue('phone', e.target.value)} />
              </div>
              <div className="col-6 col-md-4">
                <label className="form-label">CPF</label>
                <InputMask mask="999.999.999-99" className="form-control" onChange={(e) => amigo.setValue('cpf', e.target.value)} />
              </div>
              <div className="col-6 col-md-4">
                <label className="form-label">Data de Nascimento</label>
                <input type="date" className="form-control" {...amigo.register('birth')} />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label">CEP</label>
                <InputMask mask="99999-999" className="form-control" onChange={(e) => amigo.setValue('cep', e.target.value)} />
              </div>
              <div className="col-6 col-md-5">
                <label className="form-label">Endereço</label>
                <input className="form-control" {...amigo.register('address')} />
              </div>
              <div className="col-6 col-md-3">
                <label className="form-label">Cidade</label>
                <input className="form-control" {...amigo.register('city')} />
              </div>
              <div className="col-6 col-md-1">
                <label className="form-label">UF</label>
                <input className="form-control" maxLength={2} {...amigo.register('state')} />
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary" disabled={amigo.formState.isSubmitting}>
                {amigo.formState.isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="doacoes" className="card shadow-sm mb-4">
        <div className="card-header bg-secondary text-white">Doações</div>
        <div className="card-body">
          <p className="text-muted">Escolha uma das modalidades abaixo para apoiar mensalmente ou quando desejar.</p>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h3 className="h5">Cadastro de Doação</h3>
              <DonationForm />
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="h5">PIX</h3>
              <label className="form-label">Chave PIX</label>
              <div className="input-group mb-3">
                <input className="form-control" readOnly value={pixKey} />
                <button type="button" className="btn btn-outline-secondary" onClick={copyPix}>Copiar</button>
              </div>
              <img
                className="img-fluid rounded border"
                src="https://placehold.co/240x240?text=PIX+QR"
                alt="QR Code PIX"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-12">
              <h3 className="h5">Boleto</h3>
              <form onSubmit={boleto.handleSubmit((v)=>{
                // mock de geração
                alert('Boleto gerado! (mock)')
                console.log('Boleto Amigo Evangelizador:', v)
              })} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Nome</label>
                    <input className={`form-control ${boleto.formState.errors.name ? 'is-invalid' : ''}`} {...boleto.register('name')} />
                    {boleto.formState.errors.name && <div className="invalid-feedback">{boleto.formState.errors.name.message}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">CPF/CNPJ</label>
                    <InputMask mask="999.999.999-99" className={`form-control ${boleto.formState.errors.doc ? 'is-invalid' : ''}`} onChange={(e)=>boleto.setValue('doc', e.target.value)} />
                    {boleto.formState.errors.doc && <div className="invalid-feedback">{boleto.formState.errors.doc.message}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">E-mail</label>
                    <input type="email" className={`form-control ${boleto.formState.errors.email ? 'is-invalid' : ''}`} {...boleto.register('email')} />
                    {boleto.formState.errors.email && <div className="invalid-feedback">{boleto.formState.errors.email.message}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Valor (R$)</label>
                    <input type="number" min={1} step={1} className={`form-control ${boleto.formState.errors.amount ? 'is-invalid' : ''}`} {...boleto.register('amount', { valueAsNumber: true })} />
                    {boleto.formState.errors.amount && <div className="invalid-feedback">{boleto.formState.errors.amount.message}</div>}
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-secondary" type="submit" disabled={boleto.formState.isSubmitting}>
                    {boleto.formState.isSubmitting ? 'Gerando...' : 'Gerar Boleto'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmigoEvangelizador

