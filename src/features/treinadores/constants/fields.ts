import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'nome', label: 'Nome Completo', type: 'text', required: true },
  { name: 'dataNascimento', label: 'Data de Nascimento', type: 'date', required: true },
  { name: 'cpf', label: 'CPF', type: 'text', required: false },
  { name: 'rg', label: 'RG', type: 'text', required: false },
  { name: 'sexo', label: 'Sexo', type: 'select', required: true, options: ['Masculino', 'Feminino'] },
  { name: 'categoriaResponsavel', label: 'Categoria Responsável', type: 'text', required: true },
  { name: 'funcao', label: 'Função', type: 'select', required: true, options: ['Técnico', 'Auxiliar Técnico', 'Preparador Físico', 'Preparador de Goleiros'] },
  { name: 'telefone', label: 'Telefone', type: 'text', required: false },
  { name: 'email', label: 'E-mail', type: 'text', required: false },
  { name: 'observacoes', label: 'Observações', type: 'textarea', required: false },
]
