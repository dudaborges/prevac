import React, { useState } from 'react';
import { auth, db } from '../../Login/firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './CreateUserForm.css';

const CreateUserForm = () => {
  const [nome, setNome] = useState('');
  const [funcao, setFuncao] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [permissao, setPermissao] = useState('comum');

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        nome,
        funcao,
        email,
        permissao
      });
      alert('Usuário criado com sucesso!');
      setNome('');
      setFuncao('');
      setEmail('');
      setSenha('');
      setPermissao('comum');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleCreateUser} className="create-user-form">
      <h2>Criar Usuário</h2>
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
          required
        />
      </label>
      <label>
        Permissão:
        <select value={permissao} onChange={(e) => setPermissao(e.target.value)}>
          <option value="comum">Usuário Comum</option>
          <option value="adm">Administrador</option>
        </select>
      </label>
      <button type="submit">Criar Usuário</button>
    </form>
  );
};

export default CreateUserForm;
