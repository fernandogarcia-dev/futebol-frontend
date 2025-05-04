import React, { useEffect, useState } from 'react';
import DynamicForm from '../../../components/forms/DynamicForm';
import ListaAntropometrias from "../../antropometria/pages/Listar";
import ListaAtividades from "../../atividades/pages/Listar";
import ListaLesoes from "../../lesoes/pages/Listar";
import ListaMinutagens from "../../minutagem/pages/Listar";
import ListaQueixas from "../../queixas/pages/Listar";
import ListaQuestionarios from "../../questionarios/pages/Listar";
import ListaTratamentos from "../../tratamentos/pages/Listar";
import ListaTreinos from "../../treinos/pages/Listar";

import { useParams, useNavigate } from 'react-router-dom';
import { fields } from '../constants/fields';
import { Atleta } from '../types';

const EditarAtleta = () => {
  const { atletaId } = useParams<{ atletaId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Partial<Atleta>>({});

  useEffect(() => {
    console.log('Carregando atleta para edição:', atletaId);
    // Exemplo: setInitialData({ nome: "João", idade: 20 });
  }, [atletaId]);

  const handleSubmit = async (data: Atleta) => {
    console.log('Atleta atualizado:', data);
    navigate('/atletas');
  };

  return (
    <>
      <DynamicForm
        fields={fields}
        title="Editar Atleta"
        onSubmit={handleSubmit}
        initialData={initialData}
      />

      <ListaAntropometrias />
      <ListaAtividades />
      <ListaLesoes />
      <ListaMinutagens />
      <ListaQueixas />
      <ListaQuestionarios />
      <ListaTratamentos />
      <ListaTreinos />
    </>
  );
};

export default EditarAtleta;
