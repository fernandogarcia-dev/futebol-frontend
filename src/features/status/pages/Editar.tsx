import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Status } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarStatus: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Status>>({})

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // const response = await statusService.getById(id!) 
        // setInitialData(response.data)
        console.log('Status carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar status:', error)
      }
    }

    fetchStatus()
  }, [id])

  const handleStatusUpdate = async (data: Status) => {
    try {
      // await statusService.update(id!, data)
      console.log('Status atualizado:', data)
      navigate('/status')
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Status' onSubmit={handleStatusUpdate} />
    </div>
  )
}

export default EditarStatus
