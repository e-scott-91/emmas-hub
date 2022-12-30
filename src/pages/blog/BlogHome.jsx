import React from 'react';
import booksImage from "../../assets/books.png";
import { Link } from "react-router-dom";
import "./BlogHome.css";


export default function BlogHome() {
    return (
        <div className="blog-page">
            <h1>
                Blog Posts
                <img src={booksImage} className="books-image" alt="Icon of Books" />
            </h1>
            <p>Over time I've blogged about a variety of things in different
                formats but the focus here is my journey from a backend engineer to a
                full stack engineer.</p>
            <div className="blog-posts">
                <Link to="/blogs/FCI" className="blog-post-option">
                    <h2>RUM FCI</h2>
                    <p>Click here to view my first blog post</p>
                </Link>
                <Link to="/blogs/kafka" className="blog-post-option">
                    <h2>Kafka</h2>
                    <p>Click here to view my second blog post</p>
                </Link>
                <Link to="/blogs/FCI" className="blog-post-option">
                    <h2>Third Blog Post</h2>
                    <p>Click here to view my third blog post</p>
                </Link>
            </div>
        </div>
    )
}