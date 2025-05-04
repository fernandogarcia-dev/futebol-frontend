import Module from '../../../components/module/Module'

import { Link } from 'react-router-dom'
import { Questionario } from '../types'
import { useState } from 'react'

const mockQuestionarios: Questionario[] = [
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

const ListaQuestionarios = () => {
  const [questionarios, setQuestionarios] = useState<Questionario[]>(mockQuestionarios)

  const handleDelete = (id: string) => {
    setQuestionarios(questionarios.filter((t) => t.id !== id))
  }

  return (
    <Module title="Questionários Cadastrados">
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
          {questionarios.map((questionario) => (
            <tr key={questionario.id} className="border-b dark:border-gray-700">
              <td className="p-3">{questionario.data}</td>
              <td className="p-3">{questionario.atleta}</td>
              <td className="p-3">{questionario.atividade}</td>
              <td className="p-3 space-x-3">
                <Link
                  to={`/quesionarios/cadastrar`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cadastrar
                </Link>
                <Link
                  to={`/questionarios/editar/${questionario.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(questionario.id)}
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

export default ListaQuestionarios
