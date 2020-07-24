import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import logo from '../../../assets/logo.png';

import './styles.css';

const UpdateEvent = () => {

  interface EventAttributesBody {
    nome: string;
    descricao: string;
    horario_inicio: string;
    horario_fim: string;
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    initialDate: '',
    finalDate: '',
    initialHour: '',
    finalHour: '',
  });

  function splitDate(date: string): string[] {
    let day = date[0]+date[1];
    let month = date[3]+date[4];
    let year = date[6]+date[7]+date[8]+date[9];

    let hour = date[15]+date[16]+date[17]+date[18]+date[19];

    const splittedDate = [year+'-'+month+'-'+day, hour];

    return splittedDate;
  }

  useEffect(() => {
      try {
          const getData = async () => {
            await api.get('/events/12').then(response => {
              const { nome, descricao, horario_inicio, horario_fim } = response.data;
              const splittedInitialDate = splitDate(horario_inicio);
              const splittedFinalDate = splitDate(horario_fim);
    
              setFormData({...formData, 
                              name: nome, 
                              description: descricao,
                              initialDate: splittedInitialDate[0],
                              initialHour: splittedInitialDate[1],
                              finalDate: splittedFinalDate[0],
                              finalHour: splittedFinalDate[1],
              });
            });
          }
          getData();
          return;
      } catch (err) {
        return;
      }
  }, []);

  const history = useHistory();

  function formatDate(date: string){
    let day:string = date[8]+date[9];
    let month:string = date[5]+date[6];
    let year:string = date[0]+date[1]+date[2]+date[3];
    
    const formattedDate = day+'/'+month+'/'+year;
    return formattedDate;
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const { name, description, initialDate, initialHour, finalDate, finalHour } = formData;
    const formattedInitialDate = formatDate(initialDate);
    const formattedFinalDate = formatDate(finalDate);

    if (!name || !description || initialDate === 'NaN' || !initialHour || finalDate === 'NaN' || !finalHour){
      alert('Erro! Verifique se os campos preenchidos estão corretos.');
      return;
    }

    const EventBody: EventAttributesBody = {
      nome: name,
      descricao: description,
      horario_inicio: `${formattedInitialDate}, às ${initialHour} horas`,
      horario_fim: `${formattedFinalDate}, às ${finalHour} horas`
    };

    try {
      const response = await api.put('/events/12', EventBody);
      if (response.status != 200){
        alert(`Erro ${response.status}.`);
      }
    } catch (err){
      return;
    }

    alert('Evento atualizado com sucesso!');

    history.push('/home');
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
            <label htmlFor="name">Nome do evento</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={() => handleInputChange}
              defaultValue={formData.name}
            />
          </div>

          <div className="field">
            <label htmlFor="description">Descrição</label>
            <input 
              type="text" 
              name="description" 
              id="description" 
              onChange={() => handleInputChange}
              defaultValue={formData.description}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="initialDate">Data inicial do evento</label>
              <input 
                type="date" 
                name="initialDate" 
                id="initialDate" 
                onChange={() => handleInputChange}
                defaultValue={formData.initialDate}
              />
            </div>

            <div className="field">
              <label htmlFor="initialHour">Hora inicial do evento</label>
              <input 
                type="time" 
                name="initialHour" 
                id="initialHour" 
                onChange={() => handleInputChange}
                defaultValue={formData.initialHour}
              />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="finalDate">Data final do evento</label>
              <input 
                type="date" 
                name="finalDate" 
                id="finalDate" 
                onChange={() => handleInputChange}
                defaultValue={formData.finalDate}
              />
            </div>

            <div className="field">
              <label htmlFor="finalHour">Hora inicial do evento</label>
              <input 
                type="time" 
                name="finalHour" 
                id="finalHour" 
                onChange={() => handleInputChange} 
                defaultValue={formData.finalHour}
              />
            </div>
          </div>
        </fieldset>
        
        <div>
          <button type="submit">
            Atualizar
          </button>
        </div>

      </form>
    </div>
  );
}

export default UpdateEvent;