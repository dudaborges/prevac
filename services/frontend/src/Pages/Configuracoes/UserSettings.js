import React, { useEffect, useState } from 'react';
import { auth, db } from '../Login/firebase-config.js';
import { doc, getDoc, collection, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updatePassword } from 'firebase/auth';
import Navigation from '../Components/Navigation/menuNav.js'; 
import Configuracoes from '../Components/Settings/Configuracoes.js'
import './UserSettings.css';

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [nome, setNome] = useState('');
  const [funcao, setFuncao] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [permissao, setPermissao] = useState('comum');

  //Funcao usada para buscar dados dos usuarios autenticados. 
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
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

  //Atualiza os dados dos usuarios com base na colecao 'users' do firebase
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(usersData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //Funcao para criar usuario
  const handleCreateOrUpdateUser = async (e) => {
    e.preventDefault();
    if (currentUserId) {
      const userRef = doc(db, 'users', currentUserId);
      await updateDoc(userRef, { nome, funcao, email, permissao });
      if (senha) {
        const user = auth.currentUser;
        if (user) {
          await updatePassword(user, senha);
        }
      }
      alert('Usuário atualizado com sucesso!');
    } else {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), { nome, funcao, email, permissao });
      alert('Usuário criado com sucesso!');
    }
    resetForm();
    fetchUsers();
  };
//Funcao para editar usuario
  const handleEditUser = (user) => {
    setCurrentUserId(user.id);
    setNome(user.nome);
    setFuncao(user.funcao);
    setEmail(user.email);
    setPermissao(user.permissao);
    setShowForm(true);
  };

  //Funcao para deletar usuario
  const handleDeleteUser = async (userId) => {
    await deleteDoc(doc(db, 'users', userId));
    alert('Usuário removido com sucesso!');
    fetchUsers();
  };

  
  const resetForm = () => {
    setCurrentUserId(null);
    setNome('');
    setFuncao('');
    setEmail('');
    setSenha('');
    setPermissao('comum');
    setShowForm(false);
  };

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
          {userData.permissao === 'adm' && (
            <div className="create-user-container">
              <h2>Lista de Usuários</h2>
              <ul className="user-list">
                {users.map(user => (
                  <li key={user.id} className="user-list-item">
                    <span><strong>Nome:</strong> {user.nome}</span>
                    <span><strong>Função:</strong> {user.funcao}</span>
                    <span><strong>Email:</strong> {user.email}</span>
                    <span><strong>Permissão:</strong> {user.permissao}</span>
                    <div className="button-group">
                      <button onClick={() => handleEditUser(user)}>Editar</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="create-new-user-button" onClick={() => setShowForm(true)}>Criar Novo Usuário</button>
              {showForm && (
                <form onSubmit={handleCreateOrUpdateUser} className="create-user-form">
                  <h2>{currentUserId ? 'Atualizar Usuário' : 'Criar Usuário'}</h2>
                  <label>
                    Nome Completo:
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Função:
                    <input
                      type="text"
                      value={funcao}
                      onChange={(e) => setFuncao(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Senha:
                    <input
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required={!currentUserId}
                    />
                  </label>
                  <label>
                    Permissão:
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="comum"
                          checked={permissao === 'comum'}
                          onChange={(e) => setPermissao(e.target.value)}
                        />
                        Usuário Comum
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="adm"
                          checked={permissao === 'adm'}
                          onChange={(e) => setPermissao(e.target.value)}
                        />
                        Administrador
                      </label>
                    </div>
                  </label>
                  <button type="submit">{currentUserId ? 'Atualizar' : 'Criar'}</button>
                  <button type="button" onClick={resetForm}>Cancelar</button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
