import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Minutagem } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarMinutagem: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Minutagem>>({})

  useEffect(() => {
    const fetchMinutagem = async () => {
      try {
        // const response = await minutagemService.getById(id!) 
        // setInitialData(response.data)
        console.log('Minutagem carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar minutagem:', error)
      }
    }

    fetchMinutagem()
  }, [id])

  const handleMinutagemUpdate = async (data: Minutagem) => {
    try {
      // await minutagemService.update(id!, data)
      console.log('Minutagem atualizado:', data)
      navigate('/minutagens')
    } catch (error) {
      console.error('Erro ao atualizar minutagem:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Minutagem' onSubmit={handleMinutagemUpdate} />
    </div>
  )
}

export default EditarMinutagem
