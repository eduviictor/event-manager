import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';


const OrganizerUpdate = () => {
    
    const navigation = useHistory();

    
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

   
    async function updateOrganizer(){
        alert('atualizar');
    }

    return(
        <div className="updateContainer">
            <div className="content">
                <section>
                    <img src={logo} alt="Event Manager"/>

                    <h1>Atualizar perfil</h1>                
                    <Link to="/home">
                        <FiArrowLeft size={16} color="#FFF"/>
                        Voltar para home               
                    </Link>
                </section>            
                <form onSubmit={updateOrganizer}>
                <h1>CNPJ:</h1>
                <input
                    name="cnpj"
                    type="text"
                    id="cnpj"
                    onChange={e => setCnpj(e.target.value)}
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
                <button className="btnform" type="submit">
                    Salvar
                </button>
            </form>
            </div>
        </div>
    );
};

export default OrganizerUpdate;