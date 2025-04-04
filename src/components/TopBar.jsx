import React from 'react';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';
import './TopBar.css';
import { ReactComponent as NotifIcon } from '../assets/svg/notif-icon.svg';
import { ReactComponent as WishIcon } from '../assets/svg/heart1.svg';
import { ReactComponent as CartIcon } from '../assets/svg/cart.svg';
import { ReactComponent as UserIcon } from '../assets/svg/user.svg';

const TopBar = () => {
    const navigate = useNavigate();
    return (
        <div className="topBar karantina">
            <div className="logoPlaceholder" onClick={() => navigate("/")}>BESTSHOP<div className='vl-logo'/></div>
            <SearchBar />
            <div className="rightSection">
            <div className="icon"><NotifIcon/></div>
                <div className="icon"><WishIcon/></div>
                <div className="icon"><CartIcon/></div>
                <div className="userIcon" onClick={() => navigate("/login")}><UserIcon/></div>
            </div>
        </div>
    );
};


export default TopBar;