export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Status {
  id: string
  categoria: string
  atleta: string
  data: string
  status: string
  primeiroNomeUsuario: string
  ultimoNomeUsuario: string
}
