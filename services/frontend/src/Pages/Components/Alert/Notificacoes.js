import React from 'react';
import './Notificacoes.css';

//Componente criado para na proxima fase integrarmos com nosso componente de alertas e criar um filtro para pre vizualizacao do relatorio de acordo com o alerta

const Notificacoes = () => {
  return (
    <div className="notificacoes-container">
      <h2>Tipos de Alerta</h2>
      <div className="alert-type">
        <span>Acidentes</span>
        <button className="visualizar-button">Visualizar</button>
      </div>
      <div className="alert-type">
        <span>Incidentes</span>
        <button className="visualizar-button">Visualizar</button>
      </div>
      <div className="alert-type">
        <span>Potencial de Incidentes</span>
        <button className="visualizar-button">Visualizar</button>
      </div>
    </div>
  );
};

export default Notificacoes;
