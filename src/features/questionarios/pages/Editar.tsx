import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Questionario } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarQuestionario: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Questionario>>({})

  useEffect(() => {
    const fetchQuestionario = async () => {
      try {
        // const response = await questionarioService.getById(id!) 
        // setInitialData(response.data)
        console.log('Questionario carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar questionario:', error)
      }
    }

    fetchQuestionario()
  }, [id])

  const handleQuestionarioUpdate = async (data: Questionario) => {
    try {
      // await questionarioService.update(id!, data)
      console.log('Questionario atualizado:', data)
      navigate('/questionarios')
    } catch (error) {
      console.error('Erro ao atualizar questionario:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Questionário' onSubmit={handleQuestionarioUpdate} />
    </div>
  )
}

export default EditarQuestionario
