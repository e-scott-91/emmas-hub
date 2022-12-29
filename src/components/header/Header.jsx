import React from 'react';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedInIcon.svg';
import { ReactComponent as MediumIcon } from '../../assets/mediumIcon.svg';
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg';
import './Header.css';

function Header() {
    return (
            <nav>
                <div className="header-nav-bar">
                    <a href="https://github.com/e-scott-91"><GithubIcon className="div-svg"/></a>
                    <a href="https://www.linkedin.com/in/emma-scott-7b9119170/"><LinkedInIcon className="div-svg"/></a>
                    <a href="https://medium.com/@the_autistic_advocate"><MediumIcon className="div-svg"/></a>
                </div>
            </nav>
    )
}

export default Header;