import { FormField } from '../types'

export const fields: FormField[] = [
  { name: 'categoria', label: 'Categoria', type: 'text', required: true },
  { name: 'atleta', label: 'Atleta', type: 'text', required: true },
  { name: 'data', label: 'Data', type: 'date', required: true },
  { name: 'turno', label: 'Turno', type: 'select', required: true, options: ['Manhã', 'Tarde', 'Noite'] },
  { name: 'regiaoCorpo', label: 'Região do Corpo', type: 'text', required: true },
  { name: 'estruturaAnatomica', label: 'Estrutura Anatômica', type: 'text', required: true },
  { name: 'tipoLesao', label: 'Tipo de Lesão', type: 'text', required: true },
  { name: 'classificacao', label: 'Classificação', type: 'text', required: true },
  { name: 'cid', label: 'CID', type: 'text', required: true },
  { name: 'descricaoCid', label: 'Descrição do CID', type: 'text', required: false },
  { name: 'reincidente', label: 'Reincidente?', type: 'select', required: true, options: ['true', 'false'] },
  { name: 'momentoLesao', label: 'Momento da Lesão', type: 'text', required: true },
  { name: 'mecanismoLesao', label: 'Mecanismo da Lesão', type: 'text', required: true },
  { name: 'videoLesao', label: 'Vídeo da Lesão', type: 'text', required: false },
  { name: 'previsaoLiberacao', label: 'Previsão de Liberação', type: 'datetime-local', required: false },
  { name: 'observacoes', label: 'Observações', type: 'textarea', required: false },
  { name: 'dataLiberacao', label: 'Data de Liberação', type: 'datetime-local', required: false },
]
