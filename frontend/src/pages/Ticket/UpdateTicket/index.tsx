import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import logo from '../../../assets/logo.png';

import './styles.css';

const UpdateTicket = (props: any) => {
  const { match } = props;
  const { codigo } = match.params;

  interface TicketAttributesBody {
    valor: number;
    quantidade: number;
    codigo: number;
  }

  const [formData, setFormData] = useState({
    codigo: codigo,
    value: 0,
    quantity: 0,
    cod_evento: 0,
  });

  useEffect(() => {
    try {
      const getData = async () => await api.get(`/tickets/${codigo}`).then(response => {
        const { valor, quantidade, cod_evento } = response.data;
        console.log('reponse.data: ', response.data)
        setFormData({...formData, 
                        value: valor, 
                        quantity: quantidade,
                        cod_evento: cod_evento
                    });
      });
      getData();
      return;
    } catch (err) {
      return;
    }
  },[]);

  console.log('formData: ', formData);

  const history = useHistory();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const { value, codigo, cod_evento, quantity } = formData;

    if (!value || !quantity){
      alert('Erro! Verifique se os campos preenchidos estão corretos.');
      return;
    }

    const TicketBody = {
      valor: Number(value),
      quantidade: Number(quantity)
    }

    try {
      const response = await api.put(`/tickets/${codigo}`, TicketBody);

      alert('Ingresso atualizado com sucesso!');
      if (response.status != 200){
        alert(`Erro ${response.status}.`);
      }
    } catch (err){
      return;
    }

    history.push(`/update-event/${cod_evento}`);
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
              key={`${Math.floor((Math.random() * 1000))}-min`}
              type="text" 
              name="value" 
              id="value" 
              defaultValue={formData.value}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="quantity">Quantidade</label>
            <input 
              key={`${Math.floor((Math.random() * 1000))}-min`}
              type="text" 
              name="quantity" 
              id="quantity" 
              defaultValue={formData.quantity}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        
        <div>
          <button type="submit">
            Alterar
          </button>
        </div>

      </form>
    </div>
  );
}

export default UpdateTicket;