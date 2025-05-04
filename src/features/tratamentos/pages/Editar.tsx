import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Tratamento } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarTratamento: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Tratamento>>({})

  useEffect(() => {
    const fetchTratamento = async () => {
      try {
        // const response = await tratamentoService.getById(id!) 
        // setInitialData(response.data)
        console.log('Tratamento carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar tratamento:', error)
      }
    }

    fetchTratamento()
  }, [id])

  const handleTratamentoUpdate = async (data: Tratamento) => {
    try {
      // await tratamentoService.update(id!, data)
      console.log('Tratamento atualizado:', data)
      navigate('/tratamentos')
    } catch (error) {
      console.error('Erro ao atualizar tratamento:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Tratamento' onSubmit={handleTratamentoUpdate} />
    </div>
  )
}

export default EditarTratamento
