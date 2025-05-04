import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Atividade } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarAtividade: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Atividade>>({})

  useEffect(() => {
    const fetchAtividade = async () => {
      try {
        // const response = await atividadeService.getById(id!) 
        // setInitialData(response.data)
        console.log('Atividade carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar atividade:', error)
      }
    }

    fetchAtividade()
  }, [id])

  const handleAtividadeUpdate = async (data: Atividade) => {
    try {
      // await atividadeService.update(id!, data)
      console.log('Atividade atualizada:', data)
      navigate('/atividades/listar')
    } catch (error) {
      console.error('Erro ao atualizar atividade:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Atividade' onSubmit={handleAtividadeUpdate} />
    </div>
  )
}

export default EditarAtividade
