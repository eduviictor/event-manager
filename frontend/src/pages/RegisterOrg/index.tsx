import React, {useState, FormEvent} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import './styles.css';

import api from '../../services/api';

const RegisterOrg = () => {
    
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    const history = useHistory();

    async function registerOrg(event: FormEvent){ 
        event.preventDefault();

        const data = {
            cnpj,
            nome,
            email,
            login,
            senha,
            telefone
        };  

        try {
            const response = await api.post('/organizers', data);
            if (response.status != 200){
              alert(`Erro ${response.status}.`);
            }
          } catch (err){
            return;
          }
      
          alert('Organizador criado com sucesso!');
      
          history.push('/');                        
        
    }
    return(
        <div className="registerContainer">
            <div className="content">
                <section>
                    <img src={logo} alt="Event Manager"/>

                    <h1>Registrar organizador</h1>
                    <p>Ao registrar-se no Event Manager você terá uma melhor organização, divulgação e credibilidade na realização de seus eventos.</p>
                    <Link to="/">   
                        <FiArrowLeft size={16} color="#FFF"/>                     
                        Já possuo registro                
                    </Link>
                </section>            
            <form onSubmit={registerOrg}>
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
                    Registrar
                </button>
            </form>
            </div>
        </div>
    );
};

export default RegisterOrg;