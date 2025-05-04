export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Treinador {
  id: string
  nome: string
  dataNascimento: string
  cpf: string
  rg: string
  sexo: string
  categoriaResponsavel: string
  funcao: string
  telefone: string
  email: string
  observacoes: string
}
