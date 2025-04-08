import React, { useContext, useRef, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import SearchBar from './SearchBar';
import { ReactComponent as NotifIcon } from '../assets/svg/notif-icon.svg';
import { ReactComponent as WishIcon } from '../assets/svg/heart1.svg';
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg';
import { ReactComponent as UserIcon } from '../assets/svg/user.svg';
import './TopBar.css';

const TopBar = () => {
    const [showUserDrop, setShowUserDrop] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const dropRef = useRef(null);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost/logout.php', {}, { withCredentials: true });
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };  

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setShowUserDrop(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="topBar karantina">
            <div className="logoPlaceholder" onClick={() => navigate("/")}>BESTSHOP<div className='vl-logo'/></div>
            <SearchBar/>
            <div className="rightSection" ref={dropRef}>
            <div className="icon"><NotifIcon/></div>
                <div className="icon">
                    <WishIcon/>
                    {user ? <span className='topbar-counter'>{user.wishlist.length}</span> : null}
                </div>
                
                <div className="icon">
                    <CartIcon/>
                    {user ? <span className='topbar-counter'>{user.cart.length}</span> : null}
                </div>
                <div className="userIcon" onClick={() => setShowUserDrop(!showUserDrop)}><UserIcon/></div>
                <div className="user-drop" style={{ display: showUserDrop ? "block" : "none" }}>
                    <div className="user-drop-item" onClick={() => navigate("/login")}>
                        {user ? (
                            `${user.first}`
                        ) : (
                            "Login"
                        )}
                    </div>
                    <div className="user-drop-item" onClick={() => navigate("/settings")}>Parametres</div>
                    <div className="user-drop-item" onClick={handleLogout}>Déconnexion</div>
                </div>
            </div>
        </div>
    );
};


export default TopBar;