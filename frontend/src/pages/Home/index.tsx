import React, { useEffect, useState } from 'react';
import { BsPower, BsTrash } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles.css';
import { logout } from '../../services/auth';

import api from '../../services/api';

const Home = () => {
  const navigation = useHistory();

  const login = localStorage.getItem('user_name');

  function handleLogout() {
    logout();    
    localStorage.clear();
    navigation.push('/');
  }

  interface EventAttributes {
    name: string;
    description: string;
  }

  const [eventsData, setEventsData] = useState({
    events: []
  });

  useEffect(()=>{
    const getData = async () => {
      await api.get('/events').then(response => {
        const events = response.data;
        setEventsData({ events: events });
      });
    }
    getData();
  },[]);

  function handleDelete(key:string) {
    const codigo = Number(key);
    const response = async () => {
      await api.delete(`/events/${codigo}`);
      alert('Evento deletado com sucesso!');
      navigation.go(0);
      return;
    };
    response();
  }

  return (
    <div className="homeContainer">
     <header>
        <img src={logo} alt="Event Manager" />

        <span>Bem vindo, usuário</span>
        
        <div>
          <Link to="/create-event">Criar evento</Link>
        </div>
        <button onClick={handleLogout} type="button">
          <BsPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Eventos</h1>

      {eventsData.events.map((event: any) => (
        <div key={event.codigo}>
          <ul>
            <li>
              <strong>Evento:</strong>
              <p>{event.nome}</p>

              <strong>Tipo evento:</strong>
              <p>{event.description}</p>

              <button
                className="button-delete"
                onClick={() => handleDelete(event.codigo)}
                type="button"
              >
                <BsTrash size={18} color="#1393f6" />
              </button>
              <Link 
                to={`/update-event/${event.codigo}`} 
                className="detail-link" 
                type="button"
              >
                Configurações
                <FiArrowRight size={16} color="#1393f6" />
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
