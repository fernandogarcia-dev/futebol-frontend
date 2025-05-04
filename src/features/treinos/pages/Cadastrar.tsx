import DynamicForm from "../../../components/forms/DynamicForm";

import { fields } from "../constants/fields";

const CadastroTreino = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Dados salvos:', data);
  };

  return (
    <DynamicForm fields={fields} title="Cadastro de Treino" onSubmit={handleSubmit} />
  );
};

export default CadastroTreino;

