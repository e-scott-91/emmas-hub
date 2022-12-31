import React from 'react';
import ExternalLinks from './ExternalLinks';
import { ReactComponent as Wave } from '../../assets/wave.svg';
import './HomePageInfo.css';

function HomePageInfo() {
    return (
        <div className="home-page-info-div">
            <h1>Hi <Wave/> I'm Emma</h1>
            <p>A passionate and curious Full Stack Software Engineer based in London.
             I've spent most of my career working with complex event driven backend systems
            but also work with React in my own time and have been applying this experience
            more recently in work too.</p>
            <ExternalLinks/>
        </div>

    )

}

export default HomePageInfo;