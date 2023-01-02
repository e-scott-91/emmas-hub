import React from 'react';
import HomePageInfo from '../components/home/HomePageInfo';
import profPic from '../assets/prof-pic.jpeg';
import Paper from '@mui/material/Paper';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page-div">
            <div className="home-page-info">
                <HomePageInfo/>
            </div>
            <Paper elevation={3} sx={{height:"550px", width:"425px",display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center" }}>
                <img src={profPic} className="avatar" alt="Avatar of Emma" />
            </Paper>
        </div>
    )
}

export default HomePage;