import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'primeiroNome', label: 'Primeiro Nome', type: 'text', required: true },
  { name: 'ultimoNome', label: 'Último Nome', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'text', required: true },
  { name: 'senha', label: 'Senha', type: 'password', required: true },
  { name: 'perfil', label: 'Perfil de Acesso', type: 'select', required: true, options: ['Administrador', 'Técnico', 'Jogador'] },
]
