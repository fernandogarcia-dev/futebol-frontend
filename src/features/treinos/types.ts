export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Antropometria {
  id: string
  data: string
  turno: string
  categoria: string
  atleta: string
  atividade: string
  campeonato?: string
  adversario?: string
  casaFora?: string
  golsPro?: number
  golsContra?: number
  subAtividade?: string
  bloco?: number
  regras?: string
  larguraCampo?: number
  profundidadeCampo?: number
  atletasPorCampo?: number
  duracaoBloco?: string
  intervaloEntreBlocos?: string
  orientacoes?: string
  numeroBlocos?: number
  observacoes?: string
  feedbackColetivo?: string
  descricaoFisico?: string
  descricaoTatico?: string
  descricaoTecnico?: string
  descricaoComportamental?: string
  dado?: string
  valorDado?: number
}
