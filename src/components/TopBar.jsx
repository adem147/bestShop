import React from 'react';
import SearchBar from './SearchBar';

const TopBar = () => {
    return (
        <div style={styles.topBar}>
            <div style={styles.logoPlaceholder}>Logo</div>
            <SearchBar />
            <div style={styles.rightSection}>
                <div style={styles.icon}>🔔</div>
                <div style={styles.icon}>🛒</div>
                <div style={styles.welcomeUser}>Welcome, User</div>
            </div>
        </div>
    );
};

const styles = {
    topBar: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        boxSizing: "border-box",
    },
    logoPlaceholder: {
        /*flex: 1,*/
        fontSize: "20px",
        color: "black",
        textAlign: "center",
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    icon: {
        fontSize: '20px',
        cursor: 'pointer',
    },
    welcomeUser: {
        fontSize: '16px',
        color: "black",
    },
};

export default TopBar;