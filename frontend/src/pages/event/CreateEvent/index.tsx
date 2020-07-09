import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CreateEvent = () => {
  function handleSubmit() {
    alert('função handleSubmit executada');
  }

  return (
    <div id="page-create-event">
      <header>
        <Link to="/">
          Voltar para home
        </Link>
        <h1>Criar evento</h1>
      </header>

      <form onSubmit={()=>handleSubmit()}>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome do evento</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={()=>{}}
            />
          </div>

          <div className="field">
            <label htmlFor="date">Data inicial do evento</label>
            <input 
              type="text" 
              name="date" 
              id="date" 
              onChange={()=>{}}
            />
          </div>

          <div className="field">
            <label htmlFor="hour">Hora inicial do evento</label>
            <input 
              type="text" 
              name="hour" 
              id="hour" 
              onChange={()=>{}}
            />
          </div>

        </fieldset>

        <div>
        <button type="submit">
          Criar
        </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;