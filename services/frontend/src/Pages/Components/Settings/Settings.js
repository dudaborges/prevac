import React from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

const Configuracoes = () => {
  return (
    <div className="configuracoes-container">
      <div className="menu-lateral1">
        <h3>Configurações</h3>
        <hr />
        <ul>
          <li>
            <Link to="/configuracoes/usuarios">Usuário e Permissões</Link>
          </li>
          <li>
            <Link to="/configuracoes/notificacoes">Notificações e alertas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Configuracoes;
