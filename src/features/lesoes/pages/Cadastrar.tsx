import DynamicForm from "../../../components/forms/DynamicForm";

import { fields } from "../constants/fields";

const CadastroLesao = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Dados salvos:', data);
  };

  return (
    <DynamicForm fields={fields} title="Cadastro de Lesão" onSubmit={handleSubmit} />
  );
};

export default CadastroLesao;

