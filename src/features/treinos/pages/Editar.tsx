import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Treino } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarTreino: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Treino>>({})

  useEffect(() => {
    const fetchTreino = async () => {
      try {
        // const response = await treinoService.getById(id!) 
        // setInitialData(response.data)
        console.log('Treino carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar treino:', error)
      }
    }

    fetchTreino()
  }, [id])

  const handleTreinoUpdate = async (data: Treino) => {
    try {
      // await treinoService.update(id!, data)
      console.log('Treino atualizado:', data)
      navigate('/treinos')
    } catch (error) {
      console.error('Erro ao atualizar treino:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Treino' onSubmit={handleTreinoUpdate} />
    </div>
  )
}

export default EditarTreino
