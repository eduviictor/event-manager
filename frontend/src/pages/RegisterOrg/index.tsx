import React, {useState, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import './styles.css';


const RegisterOrg = () => {
    
    const [formData, setFormData] = useState({
        cnpj: '',  
        nome: '',  
        email: '',  
        telefone: '',      
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    } 


    function register(){                               
        alert('Registrar usuário');
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
            <form onSubmit={register}>
                <h1>CNPJ:</h1>
                <input
                    name="cnpj"
                    type="text"
                    id="cnpj"
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
                    name="mail"
                    type="text"
                    id="mail"
                    onChange={handleInputChange}
                />
                <h1>Senha:</h1>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                    />
                <h1>Telefone:</h1>
                <input
                    name="phone"
                    type="text"
                    id="phone"
                    onChange={handleInputChange}
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