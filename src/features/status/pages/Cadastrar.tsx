import DynamicForm from "../../../components/forms/DynamicForm";

import { fields } from "../constants/fields";

const CadastroStatus = () => {
  const handleSubmit = (data: Record<string, any>) => {
    console.log('Dados salvos:', data);
  };

  return (
    <DynamicForm fields={fields} title="Cadastro de Status" onSubmit={handleSubmit} />
  );
};

export default CadastroStatus;

