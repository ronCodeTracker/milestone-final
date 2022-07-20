import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';
import Create from './components/create.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBar />
          <Route exact path="/" component={ Home } />    
          <div className="container">
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/new-junk" component={ Create } />
          </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;