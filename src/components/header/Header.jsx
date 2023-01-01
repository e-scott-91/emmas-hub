import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
            <nav>
                <div className="site-logo">
                    <Link className="nav-link" to="/">&lt;Emma/&gt;</Link>
                </div>
                <div className="header-nav-bar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                    <Link className="nav-link" to="/achievements">Achievements</Link>
                </div>
            </nav>
    )
}

export default Header;