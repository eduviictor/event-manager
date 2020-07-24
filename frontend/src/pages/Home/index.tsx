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
        <div className="header_menu">
          <div className="menu_events">
            <Link to="/create-event">Criar evento</Link>

            <Link className="event_update" to="/update-event">Alterar evento</Link>
          </div>

          <div className="menu_attractions">
            <Link to="/create-attraction">Criar atração</Link>

            <Link className="attraction_update" to="/update-attraction">Alterar atração</Link>
          </div>

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
