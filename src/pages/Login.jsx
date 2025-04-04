import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <>
            <div className='signup-container'>
                <div className='form-container login-form-container'>
                    <h1>Se connecter</h1>
                    <div className='signup-form-divider'></div>
                    <form action="" className='signup-form'>
                        <div className='form-group'>
                            <input type="email" placeholder='Adresse E-mail'/>
                        </div>
                        <div className='form-group'>
                            <input className='half-width' type="password" placeholder='Mot de passe'/>
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