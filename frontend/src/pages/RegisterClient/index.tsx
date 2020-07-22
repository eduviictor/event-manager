import React, {useState, ChangeEvent, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import './styles.css';

interface IBGEUFResponse {
    sigla: string
  }
  
  interface IBGECityResponse {
    nome: string
  }

const RegisterClient = () => {
    
    const [formData, setFormData] = useState({
        cpf: '',  
        nome: '',  
        email: '',  
        telefone: '',  
        uf: '0',
        city: '0',    
    });
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    } 

    
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

    function register(){                               
        alert('Registrar usuário');
    }

    return(
        <div className="registerContainer">
            <div className="content">
                <section>
                    <img src={logo} alt="Event Manager"/>

                    <h1>Registrar cliente</h1>
                    <p>Ao registrar-se no Event Manager, você como cliente receberá notificações sobre seus eventos preferidos e poderá adquirir ingressos para curtir juntos com seus amigos.</p>
                    <Link to="/">    
                        <FiArrowLeft size={16} color="#FFF"/>                    
                        Já possuo registro                
                    </Link>
                </section>            
            <form onSubmit={register}>
                <h1>CPF:</h1>
                <input
                    name="cpf"
                    type="text"
                    id="cpf"
                    onChange={handleInputChange}
                />
                <h1>Nome:</h1>
                <input
                    name="name"
                    type="text"
                    id="nome"
                    onChange={handleInputChange}
                />
                <h1>E-Mail:</h1>
                <input
                    name="email"
                    type="text"
                    id="email"
                    onChange={handleInputChange}
                />
                <h1>Telefone:</h1>
                <input
                    name="telefone"
                    type="text"
                    id="telefone"
                    onChange={handleInputChange}
                />
                <div className="field">
                    <label htmlFor="uf">Estado (UF)</label>
                    <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                        <option value="0">Selecione um estado</option>
                            {ufs.map(uf => (
                                <option key={uf} value={uf}>{uf}</option>
                            ))}
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="city">Cidade</label>
                    <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                        <option value="0">Selecione uma cidade</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                    </select>
                </div>
                <button className="btnform" type="submit">
                    Registrar
                </button>
            </form>
            </div>
        </div>
    );
};

export default RegisterClient;