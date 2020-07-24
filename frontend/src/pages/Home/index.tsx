import React from 'react';
import { BsPower, BsTrash } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles.css';
import { logout } from '../../services/auth';

const Home = () => {
  const navigation = useHistory();

  const login = localStorage.getItem('user_name');

  function handleLogout() {
    logout();    
    localStorage.clear();
    navigation.push('/');
  }

  return (
    <div className="homeContainer">
      <header>
        <img src={logo} alt="Event Manager" />
        <span>Bem vindo, {login}</span>
        <div>
          <Link to="/create-event">Criar evento</Link>

          <Link to="/update-event">Alterar evento</Link>

          <Link to="/create-attraction">Criar atração</Link>

          <Link to="/update-attraction">Alterar atração</Link>
          
          <Link to="/update-organizer">Dados Pessoais</Link>
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
            className="button-delete"
            onClick={() => alert('Deletar evento')}
            type="button"
          >
            <BsTrash size={18} color="#1393f6" />
          </button>
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

export default Home;
