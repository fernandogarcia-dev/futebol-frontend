import { Routes, Route } from 'react-router-dom';

import Painel from '../features/painel/Painel';

// Atletas, Treinadores e Usuários
import CadastrarAtleta from '../features/atletas/pages/Cadastrar';
import ListarAtletas from '../features/atletas/pages/Listar';
import EditarAtleta from '../features/atletas/pages/Editar';

import CadastrarTreinador from '../features/treinadores/pages/Cadastrar';
import ListarTreinadores from '../features/treinadores/pages/Listar';
import EditarTreinador from '../features/treinadores/pages/Editar';

import CadastrarUsuario from '../features/usuarios/pages/Cadastrar';
import ListarUsuarios from '../features/usuarios/pages/Listar';
import EditarUsuario from '../features/usuarios/pages/Editar';

// Módulos vinculados ao atleta
import CadastroAntropometria from '../features/antropometria/pages/Cadastrar';
import ListaAntropometria from '../features/antropometria/pages/Listar';
import EditarAntropometria from '../features/antropometria/pages/Editar';

import CadastroAtividade from '../features/atividades/pages/Cadastrar';
import ListaAtividades from '../features/atividades/pages/Listar';
import EditarAtividade from '../features/atividades/pages/Editar';

import CadastroLesao from '../features/lesoes/pages/Cadastrar';
import ListaLesoes from '../features/lesoes/pages/Listar';
import EditarLesao from '../features/lesoes/pages/Editar';

import CadastroMinutagem from '../features/minutagem/pages/Cadastrar';
import ListaMinutagem from '../features/minutagem/pages/Listar';
import EditarMinutagem from '../features/minutagem/pages/Editar';

import CadastroQueixa from '../features/queixas/pages/Cadastrar';
import ListaQueixas from '../features/queixas/pages/Listar';
import EditarQueixa from '../features/queixas/pages/Editar';

import CadastroQuestionario from '../features/questionarios/pages/Cadastrar';
import ListaQuestionarios from '../features/questionarios/pages/Listar';
import EditarQuestionario from '../features/questionarios/pages/Editar';

import CadastroStatus from '../features/status/pages/Cadastrar';
import ListaStatus from '../features/status/pages/Listar';
import EditarStatus from '../features/status/pages/Editar';

import CadastroTratamento from '../features/tratamentos/pages/Cadastrar';
import ListaTratamentos from '../features/tratamentos/pages/Listar';
import EditarTratamento from '../features/tratamentos/pages/Editar';

import Configuracoes from '../features/configuracoes/Configuracoes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Painel />} />

      {/* Atletas */}
      <Route path="/atletas/cadastrar" element={<CadastrarAtleta />} />
      <Route path="/atletas/listar" element={<ListarAtletas />} />
      <Route path="/atletas/:atletaId" element={<EditarAtleta />} />

      {/* Treinadores */}
      <Route path="/treinadores/cadastrar" element={<CadastrarTreinador />} />
      <Route path="/treinadores/listar" element={<ListarTreinadores />} />
      <Route path="/treinadores/:treinadorId" element={<EditarTreinador />} />

      {/* Usuários */}
      <Route path="/usuarios/cadastrar" element={<CadastrarUsuario />} />
      <Route path="/usuarios/listar" element={<ListarUsuarios />} />
      <Route path="/usuarios/:usuarioId" element={<EditarUsuario />} />

      {/* Módulos por atleta */}
      <Route path="/atletas/:atletaId/antropometria/cadastrar" element={<CadastroAntropometria />} />
      <Route path="/atletas/:atletaId/antropometria/listar" element={<ListaAntropometria />} />
      <Route path="/atletas/:atletaId/antropometria/:id" element={<EditarAntropometria />} />

      <Route path="/atletas/:atletaId/atividades/cadastrar" element={<CadastroAtividade />} />
      <Route path="/atletas/:atletaId/atividades/listar" element={<ListaAtividades />} />
      <Route path="/atletas/:atletaId/atividades/:id" element={<EditarAtividade />} />

      <Route path="/atletas/:atletaId/lesoes/cadastrar" element={<CadastroLesao />} />
      <Route path="/atletas/:atletaId/lesoes/listar" element={<ListaLesoes />} />
      <Route path="/atletas/:atletaId/lesoes/:id" element={<EditarLesao />} />

      <Route path="/atletas/:atletaId/minutagem/cadastrar" element={<CadastroMinutagem />} />
      <Route path="/atletas/:atletaId/minutagem/listar" element={<ListaMinutagem />} />
      <Route path="/atletas/:atletaId/minutagem/:id" element={<EditarMinutagem />} />

      <Route path="/atletas/:atletaId/queixas/cadastrar" element={<CadastroQueixa />} />
      <Route path="/atletas/:atletaId/queixas/listar" element={<ListaQueixas />} />
      <Route path="/atletas/:atletaId/queixas/:id" element={<EditarQueixa />} />

      <Route path="/atletas/:atletaId/questionarios/cadastrar" element={<CadastroQuestionario />} />
      <Route path="/atletas/:atletaId/questionarios/listar" element={<ListaQuestionarios />} />
      <Route path="/atletas/:atletaId/questionarios/:id" element={<EditarQuestionario />} />

      <Route path="/atletas/:atletaId/status/cadastrar" element={<CadastroStatus />} />
      <Route path="/atletas/:atletaId/status/listar" element={<ListaStatus />} />
      <Route path="/atletas/:atletaId/status/:id" element={<EditarStatus />} />

      <Route path="/atletas/:atletaId/tratamentos/cadastrar" element={<CadastroTratamento />} />
      <Route path="/atletas/:atletaId/tratamentos/listar" element={<ListaTratamentos />} />
      <Route path="/atletas/:atletaId/tratamentos/:id" element={<EditarTratamento />} />

      {/* Configurações */}
      <Route path="/configuracoes" element={<Configuracoes />} />
    </Routes>
  );
};

export default AppRoutes;
