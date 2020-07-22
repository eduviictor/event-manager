import React, {useState, ChangeEvent} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

const Login = () => {
    const navigation = useHistory();
    
    const [formData, setFormData] = useState({
        name: '',
        password: '',        
    });

    function login(){
        alert('Acionar o login!');
        navigation.push('/home');
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    } 
    

    return(
        <div className="loginContainer">                        
            <section className="loginForm">            
                <img src={logo} alt="Event Manager"/>                            
                
                <form onSubmit={login}>
                    <h1>E-mail:</h1>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        onChange={handleInputChange}
                    />   

                    <h1>Password:</h1>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                    />

                    <button className="btnForm" type="submit">
                        Entrar
                    </button>
                    <h2>Registrar-se</h2>
                    <div className="registerlinks">
                        <Link to="/registercliente">
                            Cliente
                        </Link>
                        <Link to="/registerorganizador">
                            Organizador
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;