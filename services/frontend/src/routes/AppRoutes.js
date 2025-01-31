import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import api from '../services/api'
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/HomeLanding';
import UserSettings from '../Pages/Configuracoes/UserSettings';
import Navigation from '../Pages/Components/Navigation/menuNav';
import Dashboard from '../Pages/Dashboard/Dashboard';
import NotificacoesPage from '../Pages/NotificacaoPage';
import Contact from '../Pages/Contact/Contact';
const AppRoutes = () => {
  const [datas, setDatas] = useState()


  useEffect(() => {
    api
    .get("/data")
    .then((response) => setDatas(response.data))
    .catch((err) => {console.log("ops!")})
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/dashboard" element={<Dashboard datas={datas} />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/notificacoes" element={<NotificacoesPage />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
