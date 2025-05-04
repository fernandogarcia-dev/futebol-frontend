import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Lesao } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarLesao: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Lesao>>({})

  useEffect(() => {
    const fetchLesao = async () => {
      try {
        // const response = await lesaoService.getById(id!) 
        // setInitialData(response.data)
        console.log('Lesao carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar lesao:', error)
      }
    }

    fetchLesao()
  }, [id])

  const handleLesaoUpdate = async (data: Lesao) => {
    try {
      // await lesaoService.update(id!, data)
      console.log('Lesao atualizado:', data)
      navigate('/lesoes')
    } catch (error) {
      console.error('Erro ao atualizar lesao:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Lesão' onSubmit={handleLesaoUpdate} />
    </div>
  )
}

export default EditarLesao
