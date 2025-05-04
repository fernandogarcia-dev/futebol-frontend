import Module from '../../../components/module/Module'

import { Link } from 'react-router-dom'
import { Atividade } from '../types'
import { useState } from 'react'

const mockAtividades: Atividade[] = [
  {
    id: '1',
    data: '2024-08-23',
    turno: 'Manhã',
    categoria: 'Sub-20',
    atleta: 'Filipe Silva',
    atividade: 'São Caetano',
    campeonato: 'Paulista Cup sub 20',
    adversario: 'São Caetano',
    casaFora: 'Fora',
    golsPro: 7,
    golsContra: 2,
  }
]

const ListaAtividades = () => {
  const [atividades, setAtividades] = useState<Atividade[]>(mockAtividades)

  const handleDelete = (id: string) => {
    setAtividades(atividades.filter((t) => t.id !== id))
  }

  return (
    <Module title="Atividades Cadastradas">
      <table className="w-full table-auto border-collapse rounded overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
            <th className="p-3 text-left">Data</th>
            <th className="p-3 text-left">Atleta</th>
            <th className="p-3 text-left">Atividade</th>
            <th className="p-3 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {atividades.map((atividade) => (
            <tr key={atividade.id} className="border-b dark:border-gray-700">
              <td className="p-3">{atividade.data}</td>
              <td className="p-3">{atividade.atleta}</td>
              <td className="p-3">{atividade.atividade}</td>
              <td className="p-3 space-x-3">
                <Link
                  to={`/atividades/cadastrar`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cadastrar
                </Link>
                <Link
                  to={`/atividades/editar/${atividade.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(atividade.id)}
                  className="text-red-600 dark:text-red-400 hover:underline"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Module>
  )
}

export default ListaAtividades
