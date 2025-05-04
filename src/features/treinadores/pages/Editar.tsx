import React, { useEffect, useState } from 'react';
import DynamicForm from '../../../components/forms/DynamicForm';

import { useParams, useNavigate } from 'react-router-dom';
import { fields } from '../constants/fields';
import { Treinador } from '../types';

const EditarTreinador = () => {
  const { treinadorId } = useParams<{ treinadorId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Partial<Treinador>>({});

  useEffect(() => {
    console.log('Carregando treinador para edição:', treinadorId);
    // Exemplo: setInitialData({ nome: "João", idade: 20 });
  }, [treinadorId]);

  const handleSubmit = async (data: Treinador) => {
    console.log('Treinador atualizado:', data);
    navigate('/treinadores');
  };

  return (
    <DynamicForm
      fields={fields}
      title="Editar Treinador"
      onSubmit={handleSubmit}
      initialData={initialData}
    />
  );
};

export default EditarTreinador;
