import { useState } from 'react'
import type { Donation } from '../types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'

type Props = {
  onSubmit?: (donation: Donation) => void
}

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  amount: z
    .number({ invalid_type_error: 'Informe um valor numérico' })
    .min(1, 'Valor mínimo é R$ 1'),
  message: z.string().optional()
})

type FormData = z.infer<typeof schema>

function DonationForm({ onSubmit }: Props) {
  const [success, setSuccess] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', amount: 50, message: '' }
  })

  function onSubmitForm(values: FormData) {
    onSubmit?.(values as Donation)
    setSuccess('Cadastro de doação enviado! (mock)')
    reset({ ...values })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
      {success && (
        <div className="alert alert-success" role="alert">{success}</div>
      )}
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name')} />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">E-mail</label>
        <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="email" {...register('email')} />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Telefone</label>
        <InputMask
          mask="(99) 99999-9999"
          className="form-control"
          onChange={(e) => setValue('phone', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Valor (R$)</label>
        <input
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          type="number"
          min={1}
          step={1}
          {...register('amount', { valueAsNumber: true })}
        />
        {errors.amount && <div className="invalid-feedback">{errors.amount.message}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Mensagem (opcional)</label>
        <textarea className="form-control" rows={3} {...register('message')} />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}

export default DonationForm

