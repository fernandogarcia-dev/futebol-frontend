import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'nome', label: 'Nome Completo', type: 'text', required: true },
  { name: 'dataNascimento', label: 'Data de Nascimento', type: 'date', required: true },
  { name: 'cpf', label: 'CPF', type: 'text', required: false },
  { name: 'rg', label: 'RG', type: 'text', required: false },
  { name: 'sexo', label: 'Sexo', type: 'select', required: true, options: ['Masculino', 'Feminino'] },
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'posicao', label: 'Posição', type: 'select', required: false, options: ['Goleiro', 'Zagueiro', 'Lateral', 'Volante', 'Meia', 'Atacante'] },
  { name: 'altura', label: 'Altura (cm)', type: 'number', required: false },
  { name: 'peso', label: 'Peso (kg)', type: 'number', required: false },
  { name: 'numeroCamisa', label: 'Número da Camisa', type: 'number', required: false },
  { name: 'nacionalidade', label: 'Nacionalidade', type: 'text', required: false },
  { name: 'naturalidade', label: 'Naturalidade', type: 'text', required: false },
  { name: 'telefone', label: 'Telefone', type: 'text', required: false },
  { name: 'email', label: 'E-mail', type: 'text', required: false },
  { name: 'observacoes', label: 'Observações', type: 'textarea', required: false },
]
