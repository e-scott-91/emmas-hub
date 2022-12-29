import React from 'react';
import HomePageInfo from "./HomePageInfo";
import avatar from "../../assets/avatar.png";
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page-div">
            <HomePageInfo className="home-page-info"/>
            <img src={avatar} className="avatar" alt="Avatar of Emma" />
        </div>
    )
}

export default HomePage;