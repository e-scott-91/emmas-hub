import React from 'react';
import HomePageInfo from "../components/home/HomePageInfo";
import avatar from "../assets/avatar.png";
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page-div">
            <div className="home-page-info">
                <HomePageInfo/>
            </div>
            <img src={avatar} className="avatar" alt="Avatar of Emma" />
        </div>
    )
}

export default HomePage;