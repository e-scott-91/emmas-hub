import React from 'react';
import "./BlogSideBar.css";

export default function BlogSideBar() {
    return (
            <div className="blog-nav-bar">
                <h2>Blogs</h2>
                <nav className="blog-nav-bar">
                    <a className="blog-post-option-top">BE to FE</a>
                    <a className="blog-post-option">Accessibility</a>
                    <a className="blog-post-option">Autism</a>
                    <a className="blog-post-option">Other</a>
                </nav>
            </div>
    )
}