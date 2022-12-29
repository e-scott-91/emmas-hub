import React from 'react';
import './Header.css';

function Header() {
    return (
            <nav>
                <div className="header-nav-bar">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/blogs">Blogs</a>
                    <a className="nav-link" href="/achievements">Achievements</a>
                </div>
            </nav>
    )
}

export default Header;