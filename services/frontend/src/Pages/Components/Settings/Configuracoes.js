import React from 'react';
import { Link } from 'react-router-dom';
import './Configuracoes.css';

const Configuracoes = () => {
  return (
    <div className="configuracoes-container">
      <div className="menu-lateral1">
        <h3>Configurações</h3>
        <hr />
        <ul>
          <li>
            <Link to="/usersettings">Usuário e Permissões</Link>
          </li>
          <li>
            <Link to="/notificacoes">Notificações e alertas</Link>
          </li>
          <li>  
            <Link to="/contato">Formulário de atendimento</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Configuracoes;
