import React from 'react';
import Banner from "../assets/Banner.jpg"
import './Home.css';

const Home = () => {
    return (
        <div class = "Home">
            <img class = "Banner" src={Banner}/>
        </div>
    );
};

export default Home;