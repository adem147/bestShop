import React, { useState } from 'react';
import EyeShow from '../assets/svg/eye-show.svg';
import EyeHide from '../assets/svg/eye-hide.svg';
import './SignUp.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className='signup-container'>
                <div className='form-container signup-form-container'>
                    <h1>Créer Un Compte</h1>
                    <p>Trouvez tous les articles disponibles en Tunisie, obtenez les meilleures offres. Faites vos achats plus facilement et économisez à chaque achat !</p>
                    <div className='signup-form-divider'></div>
                    <form action="" className='signup-form'>
                        <div className='form-group'>
                        <select>
                            <option value="">Mr</option>
                            <option value="">Mdm</option>
                        </select>
                        <input type="text" placeholder='Nom'/>
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder='Adresse E-mail'/>
                        </div>
                        <div className='form-group'>
                            <div className='password-container'>
                                <input type={showPassword ? "text" : "password"} placeholder='Mot de passe'/>
                                <label className='show-password-container'>
                                    <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
                                    <img src={showPassword ? EyeShow : EyeHide} alt="eye" className='eye-icon'/>
                                </label>
                            </div>
                            <input type="number" placeholder='Telephone'/>
                        </div>
                        <span><input className='signup-conditon' type='checkbox'/>J'accepte&nbsp;<a href="/login">les conditions générales d'utilisation</a></span>
                        <span><input className='signup-conditon' type='checkbox'/>Je souhaite recevoir la newsletter de BestShop ainsi que des notifications sur les promotions et les baisses de prix des articles.</span>
                        <input type='submit' value="S'inscrire"/>
                    </form>
                    <span >Déjà un compte ?&nbsp;<a href="/login">Connectez-vous</a></span>
                </div>
            </div>
        </>
    );
};

export default SignUp;