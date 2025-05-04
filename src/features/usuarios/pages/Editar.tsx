import React, { useEffect, useState } from 'react';
import DynamicForm from '../../../components/forms/DynamicForm';

import { useParams, useNavigate } from 'react-router-dom';
import { fields } from '../constants/fields';
import { Usuario } from '../types';

const EditarUsuario = () => {
  const { usuarioId } = useParams<{ usuarioId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Partial<Usuario>>({});

  useEffect(() => {
    console.log('Carregando usuario para edição:', usuarioId);
    // Exemplo: setInitialData({ nome: "João", idade: 20 });
  }, [usuarioId]);

  const handleSubmit = async (data: Usuario) => {
    console.log('Usuario atualizado:', data);
    navigate('/usuarios');
  };

  return (
    <DynamicForm
      fields={fields}
      title="Editar Usuario"
      onSubmit={handleSubmit}
      initialData={initialData}
    />
  );
};

export default EditarUsuario;
