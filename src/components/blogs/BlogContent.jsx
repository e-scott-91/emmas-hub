import React from 'react';
import "./BlogContent.css";
import booksImage from "../../assets/books.png";

export default function BlogContent() {
    return (
        <div className="blog-content">
            <h1>
                Backend to Full Stack Blog
                <img src={booksImage} className="books-image" alt="Icon of Books" />
            </h1>
            <p>Over time I've blogged about a variety of things in different
            formats but the focus here is my journey from a backend engineer to a
            full stack engineer.</p>
            <div className="blog-posts">
                <div className="blog-post">
                    <h2>First Blog Post</h2>
                    <p>Click here to view my first blog post</p>
                </div>
                <div className="blog-post">
                    <h2>Second Blog Post</h2>
                    <p>Click here to view my second blog post</p>
                </div>
                <div className="blog-post">
                    <h2>Third Blog Post</h2>
                    <p>Click here to view my third blog post</p>
                </div>
            </div>
        </div>
    )
}