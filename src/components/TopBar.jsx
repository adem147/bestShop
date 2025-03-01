import React from 'react';
import SearchBar from './SearchBar';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="topBar">
            <div className="logoPlaceholder">Logo</div>
            <SearchBar />
            <div className="rightSection">
                <div className="icon">🔔</div>
                <div className="icon">🛒</div>
                <div className="welcomeUser">Welcome, User</div>
            </div>
        </div>
    );
};


export default TopBar;