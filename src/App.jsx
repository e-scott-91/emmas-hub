import React from 'react';

import './App.css';
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
      <div className="App">
          <div className="header">
              <Header/>
          </div>
          <div className="home-page-body">
              <HomePage/>
          </div>
      </div>
  );
}

export default App;
