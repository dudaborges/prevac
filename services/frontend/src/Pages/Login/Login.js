import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Formato de e-mail inválido';
    }

    if (!password) {
      errors.password = 'Senha é obrigatória';
    } else if (password.length < 8) {
      errors.password = 'Senha deve ter pelo menos 8 caracteres';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } catch (error) {
        setErrors({ firebase: "E-mail ou senha inválidos." });
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <body className="bodyhome">
      <section className="sectionHome">
        <div className="containerHome">
          <div className="imageHome">
            <div className="login-form">
              <h1>Olá!</h1>
              <h1>Seja bem vindo de volta.</h1>
              <p className="Logintext">Faça o seu login!</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="password">senha</label>
                <div className="password-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                  <span className="toggle-password" onClick={toggleShowPassword}>
                    {showPassword ? <FaEye className="Eye"/> : <FaEyeSlash className="Eye"/>}
                  </span>
                </div>
                {errors.password && <p className="error">{errors.password}</p>}
                {errors.firebase && <p className="error">{errors.firebase}</p>}

                <a href="#" className="forgot-password">Esqueceu a sua senha?</a>
                <button type="submit" className="ButtonLoginLink">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Login;
