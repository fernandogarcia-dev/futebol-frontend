import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'status', label: 'Status', type: 'text', required: true },
  { name: 'primeiroNomeUsuario', label: 'Primeiro Nome do Usuário', type: 'text', required: true },
  { name: 'ultimoNomeUsuario', label: 'Último Nome do Usuário', type: 'text', required: true },
]
