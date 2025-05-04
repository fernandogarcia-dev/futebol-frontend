export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Tratamento {
  id: string
  data: string
  turno: string
  categoria: string
  atleta: string
  tipoTratamento: string
  metodoTratamento: string
}
