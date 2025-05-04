export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Minutagem {
  id: string
  categoria: string
  atleta: string
  jogo: string
  tempoJogado: string
  tempoPrevisto: string
  status: string
  observacoes: string
}
