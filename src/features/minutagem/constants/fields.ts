import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'jogo', label: 'Jogo', type: 'text', required: true },
  { name: 'tempoJogado', label: 'Tempo Jogado (min)', type: 'number', required: true },
  { name: 'tempoPrevisto', label: 'Tempo Previsto (min)', type: 'number', required: false },
  { name: 'status', label: 'Status', type: 'select', required: true, options: ['Iniciado', 'Suplente', 'Não relacionado', 'Lesionado', 'Outro'] },
  { name: 'observacoes', label: 'Observações', type: 'textarea', required: false },
]
