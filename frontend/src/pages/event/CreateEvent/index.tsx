import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

interface Event {
  name: string
  date: string
  hour: string
}

interface Localization {
  id: number
  street: string
  neighborhood: string
  local: string
  city: string
  uf: string
}

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

const CreateEvent = () => {
  const [event, setEvent] = useState<Event>();
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    hour: '',
    uf: '0',
    city: '0',
    street: '',
    neighborhood: '',
    local: ''
  });

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const history = useHistory();

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    })
  }, []);

  useEffect(() => {
    if (selectedUf === '0'){
      return ;
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
    const city = event.target.value;

    setSelectedCity(city);
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    const { name, date, hour, uf, city, street, neighborhood, local } = formData;
    
    const eventData = new FormData();
    
    eventData.append('name', name);
    eventData.append('date', date);
    eventData.append('hour', hour);

    const locationData = new FormData();
    locationData.append('uf', uf);
    locationData.append('city', city);
    locationData.append('street', street);
    locationData.append('neighborhood', neighborhood);
    locationData.append('local', local);

    // await api.post('/locations', locationData);

    // axios.get('/locations').then(response => {
    //   const localizations: Localization[] = response.data;
    //   const localizationFound: Localization | undefined = localizations.find((localization: Localization) => {
    //     if (localization.uf === uf && localization.city === city && localization.street === street && localization.neighborhood === neighborhood && localization.local === local){
    //       return localization;
    //     }
    //   });

    //   const codLocal:number = localizationFound?.id!;

    //   eventData.append('codLocal', codLocal.toString());
    // });
    // await api.post('/events', eventData);

    alert('Evento criado com sucesso!');

    history.push('/');
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

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select 
                name="uf" 
                id="uf" value={selectedUf} 
                onChange={handleSelectUf}
              >
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select 
                name="city" 
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field-group">
          <div className="field">
              <label htmlFor="street">Rua</label>
              <input 
                type="text" 
                name="street" 
                id="street" 
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <input 
                type="text" 
                name="neighborhood" 
                id="neighborhood" 
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="local">Descrição do local</label>
            <input 
              type="text" 
              name="local" 
              id="local" 
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