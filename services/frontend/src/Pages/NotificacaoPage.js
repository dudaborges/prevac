import React from 'react';
import Notificacoes from './Components/Alert/Notificacoes';
import Navigation from './Components/Navigation/menuNav.js'; 
import Configuracoes from './Components/Settings/Configuracoes.js';

const NotificacoesPage = () => {
  return (
    <>
      <Navigation />
      <Configuracoes />
      <Notificacoes />
    </>
  );
};

export default NotificacoesPage;
