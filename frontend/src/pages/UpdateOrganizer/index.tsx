import React, {useState, useEffect, FormEvent} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';


const OrganizerUpdate = () => {
    
    const cpnj = localStorage.getItem('org_id')

    const history = useHistory();
    
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    
    useEffect(() => {
        api.get(`/organizers/${cnpj}`).then(
            res => {
                setCnpj(res.data[0].cnpj);
                setNome(res.data[0].nome);
                setEmail(res.data[0].email);
                setLogin(res.data[0].login);
                setTelefone(res.data[0].telefone);
            }
        )
    }, []);        

   
    async function updateOrganizer(event: FormEvent){
        event.preventDefault();

        const data = {
            cnpj,
            nome,
            email,
            login,
            senha,
            telefone
        };  

         if(data.cnpj === '' || data.nome === '' || data.email === '' || data.login === '' || data.senha === '' || data.telefone === ''){
            alert('Erro! Verifique se os campos preenchidos estão corretos.');
            return;
        }else{

            try {
                const response = await api.put(`/organizers/${cnpj}`, data);        
                if (response.status != 200){
                alert(`Erro ${response.status}.`);
                }
            } catch (err){
                return;
            }

                
            alert('Cliente atualizado com sucesso!');
            
            history.push('/home');   
        }
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
                    value= {cnpj}
                    name="cnpj"
                    type="text"
                    id="cnpj"
                    onChange={e => setCnpj(e.target.value)}
                />
                <h1>Nome:</h1>
                <input
                    value= {nome}
                    name="nome"
                    type="text"
                    id="nome"
                    onChange={e => setNome(e.target.value)}
                />
                <h1>E-Mail:</h1>
                <input
                    value= {email}
                    name="email"
                    type="text"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <h1>Usuário:</h1>
                <input
                    value= {login}
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
                    value= {telefone}
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