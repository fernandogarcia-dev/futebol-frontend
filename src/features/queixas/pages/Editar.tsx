import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Queixa } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarQueixa: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Queixa>>({})

  useEffect(() => {
    const fetchQueixa = async () => {
      try {
        // const response = await queixaService.getById(id!) 
        // setInitialData(response.data)
        console.log('Queixa carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar queixa:', error)
      }
    }

    fetchQueixa()
  }, [id])

  const handleQueixaUpdate = async (data: Queixa) => {
    try {
      // await queixaService.update(id!, data)
      console.log('Queixa atualizado:', data)
      navigate('/queixas')
    } catch (error) {
      console.error('Erro ao atualizar queixa:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Queixa' onSubmit={handleQueixaUpdate} />
    </div>
  )
}

export default EditarQueixa
