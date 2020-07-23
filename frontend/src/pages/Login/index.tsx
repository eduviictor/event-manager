import React, {useState, ChangeEvent} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

const Login = () => {
    const navigation = useHistory();
    
    const [formData, setFormData] = useState({
        login: '',
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
                    <h1>Login:</h1>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        onChange={handleInputChange}
                    />   

                    <h1>Senha:</h1>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                    />

                    <button className="btnForm" type="submit">
                        Entrar
                    </button>
                    <h2>Registrar</h2>
                    <div className="registerlinks">
                        <Link to="/register-client">
                            Cliente
                        </Link>
                        <Link to="/register-organizer">
                            Organizador
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;