import React, { useState } from 'react';
import Navigation from '../Components/Navigation/menuNav';
import Configuracoes from '../Components/Settings/Configuracoes';
import "../Contact/Contact.css"

const Contact = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    message: ''
  });

  // Estado para controlar a visibilidade da mensagem de sucesso
  const [messageSent, setMessageSent] = useState(false);

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Recuperar dados existentes do localStorage
    const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
    // Adicionar novos dados
    const updatedData = [...existingData, formData];
    // Salvar os dados atualizados no localStorage
    localStorage.setItem('contactData', JSON.stringify(updatedData));
    // Mostrar a mensagem de sucesso
    setMessageSent(true);
    // Ocultar a mensagem após 3 segundos
    setTimeout(() => setMessageSent(false), 3000);
    // Limpar os campos do formulário
    setFormData({
      name: '',
      email: '',
      telefone: '',
      message: ''
    });
  };

  return (
    <>
      <Navigation />
      <Configuracoes />
      <div className="contact-container">
        <h2>Contato com o Suporte do Prevac</h2>
        <div className="contact-details">
          <p className='sub-title-contact'>Dados de Contato</p>
          <p className='contact-text'>Email: suporte@prevac.com</p>
          <p className='contact-text'>Telefone: (48) 1234-5678</p>
        </div>
        <div className="contact-form">
          <p className='sub-title-contact'>Formulário de Contato</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder='Digite seu nome' 
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder='Digite seu e-mail' 
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                value={formData.telefone} 
                onChange={handleChange} 
                // pattern="\(\d{2}\) \d \d{4}-\d{4}" 
                required 
                placeholder='Digite seu telefone' 
              />
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder='Digite aqui o que aconteceu' 
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        {messageSent && (
          <div className="toast">
            <p>Dados enviados com sucesso!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
