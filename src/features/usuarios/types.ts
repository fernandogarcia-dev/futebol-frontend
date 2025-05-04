export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Usuario {
  id: string
  primeiroNome: string
  ultimoNome: string
  email: string
  senha: string
  perfil: string
}
