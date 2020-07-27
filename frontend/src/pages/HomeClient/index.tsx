import React from 'react';
import { BsPower } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles.css';
import { logout } from '../../services/auth';

const HomeClient = () => {
  const navigation = useHistory();
  
  const login = localStorage.getItem('user_name');

  function handleLogout() {
    logout();
    localStorage.clear();
    navigation.push('/');
  }

  return (
    <div className="homeClientContainer">
      <header>
        <img src={logo} alt="Event Manager" />
        <span>Bem vindo, {login}</span>
        <div>
          <Link to="/update-client">Dados Pessoais</Link>
        </div>
        <button onClick={handleLogout} type="button">
          <BsPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Eventos</h1>

      <ul>
        <li>
          <strong>Evento:</strong>
          <p>nome do evento</p>

          <strong>Tipo evento:</strong>
          <p>informações do evento</p>
          <button
            className="detail-link"
            onClick={() => alert('Visualizar detalhes')}
            type="button"
          >
            Ver detalhes
            <FiArrowRight size={16} color="#1393f6" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HomeClient;
