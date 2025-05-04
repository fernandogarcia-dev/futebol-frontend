import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'turno', label: 'Turno', type: 'select', required: true, options: ['Manhã', 'Tarde', 'Noite'] },
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'intensidadeQueixa', label: 'Intensidade da Queixa', type: 'number', required: true },
  { name: 'regiaoCorpo', label: 'Região do Corpo', type: 'text', required: true },
  { name: 'segmento', label: 'Segmento', type: 'text', required: true },
  { name: 'preDurantePos', label: 'Pré/Durante/Pós', type: 'select', required: true, options: ['Pré', 'Durante', 'Pós'] },
]
