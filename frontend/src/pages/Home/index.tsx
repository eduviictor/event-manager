import React from 'react';
import {BsPower, BsTrash} from "react-icons/bs";
import {FiArrowRight} from "react-icons/fi";
import {Link, useHistory} from 'react-router-dom';

import logo from '../../assets/logo.png';
import './styles.css';

const Home = () => {

  const navigation = useHistory();

  function logout(){  
    navigation.push('/');
  }

  return (
    <div className="homeContainer">
    <header>
        <img src={logo} alt="Event Manager"/>
        <span>Bem vindo, usuário</span>
        <div>
            <Link to="/create-event">
              Criar evento
            </Link>                   
            
            <Link to="/update-event">
              Alterar evento
            </Link>
            
        </div>
        <button onClick={logout} type="button">
            <BsPower size={18} color="#E02041"/>                    
        </button>
    </header>

    <h1>Eventos</h1>

    <ul>        
          <li>
              <strong>Evento:</strong>
              <p>nome do evento</p>

              <strong>Tipo evento:</strong>
              <p>informações do evento</p>

              <button className="button-delete" onClick={() => alert('Deletar evento')} type="button">
                  <BsTrash size={18} color="#1393f6"/>
              </button>
              <button className="detail-link" onClick={() => alert('Visualizar detalhes')} type="button">
                  Ver detalhes
                  <FiArrowRight size={16} color="#1393f6"/>
              </button>
          </li>                                 
    </ul>
    </div>
  );
}

export default Home;