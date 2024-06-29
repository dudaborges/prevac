import React, { useEffect, useState } from 'react';
import { auth, db } from '../Login/firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import Navigation from '../Components/Navigation/menuNav.js';
import Configuracoes from '../Components/Settings/CreateUserForm.js';
import CreateUserForm from '../Components/Settings/CreateUserForm.js';
import './UserSettings.css'; 
import '../Components/Settings/CreateUserForm.css'; 

const UserSettings = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      console.log('Usuário atual:', user); // Verifica se o usuário está autenticado
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          console.log('Dados do documento do usuário:', userDoc.data()); // Verifica os dados do documento
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log('Documento de usuário não encontrado.');
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      } else {
        console.log('Usuário não autenticado.');
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="user-settings-page">
      <Navigation />
    
        <Configuracoes />
        <div className="user-settings-content">
          <div className="user-settings">
            <h2>Configurações do Usuário</h2>
            <p><strong>Nome:</strong> {userData.nome}</p>
            <p><strong>Função:</strong> {userData.funcao}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
          {userData.permissao === 'adm' && <CreateUserForm />}
        </div>
  
    </div>
  );
};

export default UserSettings;