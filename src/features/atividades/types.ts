export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Atividade {
  id: string
  data: string
  turno: string
  categoria: string
  atleta: string
  atividade: string
  presenca: string
  motivoAusencia: string
  obs: string
}
