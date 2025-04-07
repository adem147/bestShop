import React,  { useState } from 'react';
import axios from 'axios';
import EyeShow from '../assets/svg/eye-show.svg';
import EyeHide from '../assets/svg/eye-hide.svg';

import './SignUp.css';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        console.log("Login function called");
        e.preventDefault();
        
        // Prepare the form data to be sent to the server
        const loginData = new FormData();
        loginData.append('email', email);
        loginData.append('password', password);

        try {
            // Send POST request to the PHP script
            const response = await axios.post('http://localhost/login.php', loginData);
            
            // Check the response
            if (response.data.error) {
                console.log(response.data.error);
                setMessage(response.data.error);
            } else if (response.data.message) {
                console.log(response.data.user);
                setMessage(response.data.message);
            } else {
                console.log("Unexpected response:", response.data);
                setMessage('Unexpected response from server.');
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            setMessage('An error occurred during login.');
        }
    };

    return (
        <>
            <div className='signup-container'>
                <div className='form-container login-form-container'>
                    <h1>Se connecter</h1>
                    <div className='signup-form-divider'></div>
                    <p>{message}</p>
                    <form action="" className='signup-form' onSubmit={handleLogin}>
                        <div className='form-group'>
                            <input
                                type="email"
                                placeholder='Adresse E-mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <div className='password-container half-width'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Mot de passe' required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                <label className='show-password-container'>
                                    <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
                                    <img src={showPassword ? EyeShow : EyeHide} alt="eye" className='eye-icon'/>
                                </label>
                            </div>
                            <span><input type='checkbox'/>Se souvenir de moi</span>
                        </div>
                        <input type='submit' value="Se connecter"/>
                    </form>
                    <span >Pas encore de compte ?&nbsp;<a href="/signup">Créez-en un</a></span>
                </div>
            </div>
        </>
    );
};

export default SignUp;