import Module from '../../../components/module/Module'

import { Link } from 'react-router-dom'
import { Antropometria } from '../types'
import { useState } from 'react'

const mockAntropometrias: Antropometria[] = [
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

const ListaAntropometrias = () => {
  const [antropometrias, setAntropometrias] = useState<Antropometria[]>(mockAntropometrias)

  const handleDelete = (id: string) => {
    setAntropometrias(antropometrias.filter((t) => t.id !== id))
  }

  return (
    <Module title="Antropometrias Cadastradas">
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
          {antropometrias.map((antropometria) => (
            <tr key={antropometria.id} className="border-b dark:border-gray-700">
              <td className="p-3">{antropometria.data}</td>
              <td className="p-3">{antropometria.atleta}</td>
              <td className="p-3">{antropometria.atividade}</td>
              <td className="p-3 space-x-3">
                <Link
                  to={`/antropometria/cadastrar`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cadastrar
                </Link>
                <Link
                  to={`/antropometria/editar/${antropometria.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(antropometria.id)}
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

export default ListaAntropometrias
