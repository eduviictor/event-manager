import React, {useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';


interface IBGEUFResponse {
    sigla: string
  }
  
  interface IBGECityResponse {
    nome: string
  }


  const ClientUpdate = () => {
    
    const navigation = useHistory();

    
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    
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
    

    async function updateClient(){
        alert('atualizar');
    }

    return(
        <div className="updateContainer">
            <div className="content">
                <section>
                    <img src={logo} alt="Event Manager"/>

                    <h1>Atualizar perfil</h1>                
                    <Link to="/home-client">
                        <FiArrowLeft size={16} color="#FFF"/>
                        Voltar para home               
                    </Link>
                </section>            
                <form onSubmit={updateClient}>
                <h1>CPF:</h1>
                <input
                    name="cpf"
                    type="text"
                    id="cpf"
                    onChange={e => setCpf(e.target.value)}                    
                />
                <h1>Nome:</h1>
                <input
                    name="nome"
                    type="text"
                    id="nome"
                    onChange={e => setNome(e.target.value)} 
                />
                <h1>E-Mail:</h1>
                <input
                    name="email"
                    type="text"
                    id="email"
                    onChange={e => setEmail(e.target.value)} 
                />
                <h1>Usuário:</h1>
                <input
                    name="login"
                    type="text"
                    id="login"
                    onChange={e => setLogin(e.target.value)} 
                />
                <h1>Senha:</h1>
                    <input
                        name="senha"
                        type="password"
                        id="senha"
                        onChange={e => setSenha(e.target.value)} 
                    />
                <h1>Telefone:</h1>
                <input
                    name="telefone"
                    type="text"
                    id="telefone"
                    onChange={e => setTelefone(e.target.value)}                     
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
                    Salvar
                </button>
            </form>
            </div>
        </div>
    );
};

export default ClientUpdate;