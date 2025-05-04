export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Queixa {
  id: string
  data: string
  turno: string
  categoria: string
  atleta: string
  intensidadeQueixa: string
  regiaoCorpo: string
  segmento: string
  preDurantePos: string
}
