import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav class="navbar">
            <ul class="navbar-list">
                <li class="navbar-item">Smartphones</li>
                <li class="navbar-item">Informatique</li>
                <li class="navbar-item">Électroménager</li>
                <li class="navbar-item">Image - son</li>
                <li class="navbar-item">Beauté</li>
                <li class="navbar-item">Enfants</li>
                <li class="navbar-item">Bricolage</li>
                <li class="navbar-item">Jardinage</li>
            </ul>
            {/*<div class="categories"></div>*/}
        </nav>
    );
};
export default NavBar;