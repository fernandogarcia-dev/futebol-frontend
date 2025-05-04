import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/forms/DynamicForm'

import { Antropometria } from '../types'
import { useParams, useNavigate } from 'react-router-dom'

const EditarAntropometria: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState<Partial<Antropometria>>({})

  useEffect(() => {
    const fetchAntropometria = async () => {
      try {
        // const response = await antropometriaService.getById(id!) 
        // setInitialData(response.data)
        console.log('Antropometria carregado para edição:', id)
      } catch (error) {
        console.error('Erro ao carregar antropometria:', error)
      }
    }

    fetchAntropometria()
  }, [id])

  const handleAntropometriaUpdate = async (data: Antropometria) => {
    try {
      // await antropometriaService.update(id!, data)
      console.log('Antropometria atualizado:', data)
      navigate('/antropometria/listar')
    } catch (error) {
      console.error('Erro ao atualizar antropometria:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <DynamicForm initialData={initialData} title='Editar Antropometria' onSubmit={handleAntropometriaUpdate} />
    </div>
  )
}

export default EditarAntropometria
