import React from 'react';
import { Link } from 'react-router-dom';
import booksImage from '../../assets/books.png';
import { ReactComponent as Graphsvg} from '../../assets/graph-icon.svg';
import { ReactComponent as Kafka} from '../../assets/kafka-icon.svg';
import './BlogHome.css';


export default function BlogHome() {


    return (
        <div className="blog-page">
            <h1>
                Blog Posts
                <img src={booksImage} className="books-image" alt="Icon of Books" />
            </h1>
            <div className="blog-posts">
                <Link to="/blogs/FCI" className="blog-post-option">
                    <h2>RUM FCI</h2>
                    <div className="post-icon">
                        <Graphsvg />
                    </div>
                    <p className="blog-post-option-description">A brief introduction into what Real User Monitoring (RUM) is used for focusing mainly on <br/>
                        Failed Customer Interaction (FCI) methods which are a widely implement best practice.</p>
                </Link>
                <Link to="/blogs/kafka" className="blog-post-option">
                    <h2>Kafka</h2>
                    <div className="post-icon">
                        <Kafka />
                    </div>
                    <p className="blog-post-option-description">Kafka is a key tool in many leading backend systems and this post aims to provide the high <br/>
                        level knowledge required to dig further into Kafka and get started with it.</p>
                </Link>
                <Link to="/blogs/FCI" className="blog-post-option">
                    <h2>GraphQL</h2>
                    <p className="blog-post-option-description">Click here to view my third blog post</p>
                </Link>
            </div>
        </div>
    )
}