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
    const { user, setUser, setWishlist, setCart, wishlistCount, setWishlistCount, cartCount, setCartCount } = useContext(AuthContext);
    const navigate = useNavigate();
    const dropRef = useRef(null);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost/logout.php', {}, { withCredentials: true });
            setUser(null);
            setWishlist([]);
            setWishlistCount(0);
            setCart([]);
            setCartCount(0);
            navigate("/");
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
                <div className="icon" onClick={() => navigate("/wishlist")}>
                    <WishIcon/>
                    {wishlistCount? <span className='topbar-counter'>{wishlistCount}</span> : null}
                </div>
                
                <div className="icon" onClick={() => navigate("/cart")}>
                    <CartIcon/>
                    {cartCount? <span className='topbar-counter'>{cartCount}</span> : null}
                </div>
                <div className="userIcon" onClick={() => setShowUserDrop(!showUserDrop)}><UserIcon/></div>
                <div className="user-drop" style={{ display: showUserDrop ? "block" : "none" }}>
                    {!user ? <div className="user-drop-item" onClick={() => navigate("/login")}> Login </div>:null}
                    {user ? <div className="user-drop-item" onClick={() => navigate("/user")}> {user.first} </div>:null}
                    <div className="user-drop-item" onClick={() => navigate("/settings")}>Parametres</div>
                    {user?<div className="user-drop-item" onClick={handleLogout}>Déconnexion</div>:null}
                </div>
            </div>
        </div>
    );
};


export default TopBar;