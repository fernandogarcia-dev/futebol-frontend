import Module from '../../../components/module/Module';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Treinador } from '../types';

const mockTreinadores: Treinador[] = [
  {
    id: '1',
    treinador: 'Filipe Silva',
    data: '13',
    golsPro: 12,
    golsContra: 12,
    turno: '',
    categoria: '',
    atividade: ''
  },
];

const ListaTreinadores = () => {
  const [treinadores, setTreinadores] = useState(mockTreinadores);

  const handleDelete = (id: string) => {
    setTreinadores(treinadores.filter((a) => a.id !== id));
  };

  return (
    <Module title="Treinadores Cadastrados">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Atividade</th>
            <th className="p-3 text-left">Turno</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {treinadores.map((a) => (
            <tr key={a.id} className="border-b dark:border-gray-700">
              <td className="p-3">{a.treinador}</td>
              <td className="p-3">{a.atividade}</td>
              <td className="p-3">{a.turno}</td>
              <td className="p-3 space-x-2">
                <Link to={`/treinadores/${a.id}`} className="text-blue-500 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(a.id)} className="text-red-500 hover:underline">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Module>
  );
};

export default ListaTreinadores;
