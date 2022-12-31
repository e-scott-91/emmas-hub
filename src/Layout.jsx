import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import './Layout.css';

function Layout() {
  return (
      <div className="App">
          <div className="header">
              <Header/>
          </div>
          <div className="home-page-body">
              <Outlet/>
          </div>
      </div>
  );
}

export default Layout;
