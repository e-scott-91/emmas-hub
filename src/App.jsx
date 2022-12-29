import React from 'react';

import './App.css';
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
      <div className="App">
        <Header/>

        <HomePage/>
      </div>
  );
}

export default App;
