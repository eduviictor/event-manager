import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/auth';

import './styles.css';

import logo from '../../assets/logo.png';
import api from '../../services/api';

const Login = () => {
  const navigation = useHistory();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const logged = await api.post('/session', {
        login: formData.login,
        senha: formData.password,
      });
      console.log('logged', logged);
      if (logged.status !== 200) {
        alert('Usuário ou senha incorretos!');
        return;
      }

      const { user, token } = logged.data;
      login(token, user);
      if(user.type_user === 'client'){
        localStorage.setItem('user_name',user.login);
        localStorage.setItem('cliente_id',user.cpf);
        navigation.push('/home-client');
      }else if(user.type_user === 'organizer'){
        localStorage.setItem('user_name',user.login);
        localStorage.setItem('org_id',user.cnpj);
        navigation.push('/home');
      }  
    } catch (err) {
      console.log('err', err);
      alert('Usuário ou senha incorretos!');
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="loginContainer">
      <section className="loginForm">
        <img src={logo} alt="Event Manager" />

        <form onSubmit={handleLogin}>
          <h1>Login:</h1>
          <input
            type="text"
            name="login"
            id="login"
            onChange={handleInputChange}
          />

          <h1>Senha:</h1>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
          />

          <button className="btnForm" type="submit">
            Entrar
          </button>
          <h2>Registrar</h2>
          <div className="registerlinks">
            <Link to="/register-client">Cliente</Link>
            <Link to="/register-organizer">Organizador</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
