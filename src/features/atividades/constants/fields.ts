import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'turno', label: 'Turno', type: 'select', required: true, options: ['Manhã', 'Tarde', 'Noite'] },
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'atividade', label: 'Atividade', type: 'text', required: true },
  { name: 'presenca', label: 'Presença', type: 'select', required: true, options: ['Presente', 'Ausente'] },
  { name: 'motivoAusencia', label: 'Motivo da Ausência', type: 'text', required: false },
  { name: 'obs', label: 'Observações', type: 'textarea', required: false },
]

