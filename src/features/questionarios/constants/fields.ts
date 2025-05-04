import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'turno', label: 'Turno', type: 'select', required: true, options: ['Manhã', 'Tarde', 'Noite'] },
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'nomeQuestao', label: 'Nome da Questão', type: 'text', required: true },
  { name: 'prePos', label: 'Pré/Pós', type: 'select', required: true, options: ['Pré', 'Pós'] },
  { name: 'valorResposta', label: 'Valor da Resposta', type: 'number', required: true },
]
