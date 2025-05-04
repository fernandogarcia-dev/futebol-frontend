import DynamicForm from "../../../components/forms/DynamicForm";

import { fields } from "../constants/fields";

const CadastroUsuario = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Dados salvos:', data);
  };

  return (
    <DynamicForm fields={fields} title="Cadastro de Usuario" onSubmit={handleSubmit} />
  );
};

export default CadastroUsuario;

