import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'turno', label: 'Turno', type: 'select', required: true, options: ['Manhã', 'Tarde', 'Noite'] },
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'tipoTratamento', label: 'Tipo de Tratamento', type: 'text', required: true },
  { name: 'metodoTratamento', label: 'Método de Tratamento', type: 'text', required: true },
]
