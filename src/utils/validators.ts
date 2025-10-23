export function onlyDigits(v: unknown): string {
  return String(v ?? '').replace(/\D+/g, '')
}

export function isValidCEP(raw: string): boolean {
  const v = onlyDigits(raw)
  return v.length === 8
}

const UF_SET = new Set([
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
])
export function isValidUF(v: string): boolean {
  if (!v) return false
  return UF_SET.has(v.toUpperCase())
}

export function isValidPhoneBR(raw: string): boolean {
  const d = onlyDigits(raw)
  // Aceita 10 ou 11 dígitos (fixo/celular). Se 11, dígito 3 normalmente é 9.
  return d.length === 10 || d.length === 11
}

export function isValidCPF(raw: string): boolean {
  const cpf = onlyDigits(raw)
  if (cpf.length !== 11) return false
  if (/^(\d)\1{10}$/.test(cpf)) return false
  let sum = 0
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i)
  let rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cpf[9])) return false
  sum = 0
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i)
  rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) rev = 0
  return rev === parseInt(cpf[10])
}

export function isValidCNPJ(raw: string): boolean {
  const c = onlyDigits(raw)
  if (c.length !== 14) return false
  if (/^(\d)\1{13}$/.test(c)) return false
  const calc = (base: number[]) => {
    let size = base.length
    let pos = size - 7
    let sum = 0
    for (let i = size; i >= 1; i--) {
      sum += parseInt(String(c[size - i])) * pos--
      if (pos < 2) pos = 9
    }
    const res = sum % 11
    return res < 2 ? 0 : 11 - res
  }
  const d1 = calc(new Array(12).fill(0))
  if (d1 !== parseInt(c[12])) return false
  const d2 = calc(new Array(13).fill(0))
  return d2 === parseInt(c[13])
}

export function isValidCpfOrCnpj(raw: string): boolean {
  const d = onlyDigits(raw)
  if (d.length === 11) return isValidCPF(d)
  if (d.length === 14) return isValidCNPJ(d)
  return false
}

