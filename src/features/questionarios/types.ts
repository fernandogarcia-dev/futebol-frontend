export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Questionario {
  id: string
  data: string
  turno: string
  categoria: string
  atleta: string
  nomeQuestao: string
  prePos: string
  valorResposta: string
}
