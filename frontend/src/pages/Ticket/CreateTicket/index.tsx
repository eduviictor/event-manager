import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import logo from '../../../assets/logo.png';

import './styles.css';

const CreateTicket = (props: any) => {
  const { match } = props;
  const { cod_evento } = match.params;

  interface TicketAttributesBody {
    valor: number;
    quantidade: number;
    cod_evento: number;
  }

  const [formData, setFormData] = useState({
    value: 0,
    quantity: 0,
    cod_evento: cod_evento,
  });

  const history = useHistory();

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const { value, quantity } = formData;

    if (!value || !quantity ){
      alert('Erro! Verifique se os campos preenchidos estão corretos.');
      return;
    }

    const TicketBody: TicketAttributesBody = {
      valor: value,
      quantidade: quantity,
      cod_evento: cod_evento
    };

    try {
      const response = await api.post('/tickets', TicketBody);
    } catch (err){
      alert(err);
      return;
    }

    alert('Ingresso criado com sucesso!');

    history.push(`/update-event/${cod_evento}`);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div id="page-create-event">
      <header>
        <Link to="/home">
          <img src={logo} alt="Event Manager"/>
        </Link>
        <h1>Criar evento</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="value">Valor</label>
            <input 
              type="text" 
              name="value" 
              id="value" 
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="quantity">Quantidade</label>
            <input 
              type="text" 
              name="quantity" 
              id="quantity" 
              onChange={handleInputChange}
            />
          </div>

          {/* <div className="field">
            <label htmlFor="cod_evento">cod_evento</label>
            <input 
              type="text" 
              name="cod_evento" 
              id="cod_evento" 
              onChange={handleInputChange}
            />
          </div> */}

          
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

export default CreateTicket;