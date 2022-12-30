import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Achievements from "./pages/Achievements";
import BlogHome from "./pages/blog/BlogHome";
import Layout from './Layout';
import FCI from "./pages/blog/posts/FCI";
import NoPage from "./pages/NoPage";
import Kafka from "./pages/blog/posts/Kafka";
import './index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="blogs" element={<BlogHome/>}/>
                    <Route path="blogs/FCI" element={<FCI/>}/>
                    <Route path="blogs/kafka" element={<Kafka/>}/>
                    <Route path="achievements" element={<Achievements/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
