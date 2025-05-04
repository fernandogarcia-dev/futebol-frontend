export interface FormField {
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'time'
  required: boolean
  options?: string[]
}

export interface Lesao {
  id: string
  categoria: string
  atleta: string
  data: string
  turno: string
  regiaoCorpo: string
  estruturaAnatomica: string
  tipoLesao: string
  classificacao: string
  cid: string
  descricaoCid: string
  reincidente: string
  momentoLesao: string
  mecanismoLesao: string
  videoLesao: string
  previsaoLiberacao: string
  observacoes: string
  dataLiberacao: string
}
