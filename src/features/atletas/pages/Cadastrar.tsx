import DynamicForm from "../../../components/forms/DynamicForm";
import ListaAntropometrias from "../../antropometria/pages/Listar";
import ListaAtividades from "../../atividades/pages/Listar";
import ListaLesoes from "../../lesoes/pages/Listar";
import ListaMinutagens from "../../minutagem/pages/Listar";
import ListaQueixas from "../../queixas/pages/Listar";
import ListaQuestionarios from "../../questionarios/pages/Listar";
import ListaTratamentos from "../../tratamentos/pages/Listar";
import ListaTreinos from "../../treinos/pages/Listar";

import { fields } from "../constants/fields";

const CadastroAtleta = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Atleta salvo:', data);
  };

  return (
    <>
      <DynamicForm fields={fields} title="Cadastro de Atleta" onSubmit={handleSubmit} />

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

export default CadastroAtleta;
