import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'
import { useState } from 'react'

const boletoSchema = z.object({
  name: z.string().min(2, 'Informe o nome completo'),
  doc: z.string().min(11, 'CPF/CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  amount: z
    .number({ invalid_type_error: 'Informe um valor numérico' })
    .min(1, 'Valor mínimo é R$ 1'),
})

type BoletoForm = z.infer<typeof boletoSchema>

function Boleto() {
  const [success, setSuccess] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, reset } = useForm<BoletoForm>({
    resolver: zodResolver(boletoSchema),
    defaultValues: { name: '', doc: '', email: '', amount: 50 }
  })

  function handleMock(values: BoletoForm) {
    // Mock de geração de boleto
    setSuccess('Boleto gerado com sucesso! (mock). Linha digitável: 23790.00000 00000.000000 00000.000000 0 00000000000000')
    reset({ ...values })
  }

  return (
    <section>
      <h2 className="h3">Gerar Boleto</h2>
      <p className="text-muted">
        Para emissão de boletos, integramos com provedores como Asaas, Iugu, Pagar.me ou Gerencianet.
      </p>
      <div className="card shadow-sm" style={{maxWidth: 720}}>
        <div className="card-body">
          {success && <div className="alert alert-success" role="alert">{success}</div>}
          <form onSubmit={handleSubmit(handleMock)} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Nome</label>
                <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name')} />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">CPF/CNPJ</label>
                <InputMask
                  mask="999.999.999-99"
                  className={`form-control ${errors.doc ? 'is-invalid' : ''}`}
                  onChange={(e) => setValue('doc', e.target.value)}
                />
                {errors.doc && <div className="invalid-feedback">{errors.doc.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">E-mail</label>
                <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="email" {...register('email')} />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Valor (R$)</label>
                <input className={`form-control ${errors.amount ? 'is-invalid' : ''}`} type="number" min={1} step={1} {...register('amount', { valueAsNumber: true })} />
                {errors.amount && <div className="invalid-feedback">{errors.amount.message}</div>}
              </div>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Gerando...' : 'Gerar Boleto'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Boleto

