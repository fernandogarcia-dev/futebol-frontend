import DynamicForm from "../../../components/forms/DynamicForm";

import { fields } from "../constants/fields";

const CadastroTreinador = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Dados salvos:', data);
  };

  return (
    <DynamicForm fields={fields} title="Cadastro de Treinador" onSubmit={handleSubmit} />
  );
};

export default CadastroTreinador;

