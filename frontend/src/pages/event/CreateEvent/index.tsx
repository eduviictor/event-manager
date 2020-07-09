import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface Event {
  name: string
  date: string
  hour: string
}

const CreateEvent = () => {
  const [event, setEvent] = useState<Event>();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    hour: '',
  });

  function handleSubmit() {
    alert('função handleSubmit executada');
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="date">Data inicial do evento</label>
            <input 
              type="text" 
              name="date" 
              id="date" 
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="hour">Hora inicial do evento</label>
            <input 
              type="text" 
              name="hour" 
              id="hour" 
              onChange={handleInputChange}
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