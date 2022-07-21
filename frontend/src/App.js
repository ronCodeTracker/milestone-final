import './App.css';
import React, { Component, useEffect, useState } from 'react';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';
import JunkForm from './components/junkform.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios'

function App() {
  let [data, setData] = useState([])
    
    
    const API_URL = ""
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(API_URL)
        const resData = await response.json()
        console.log(resData)
        setData(resData)
      }
      fetchData()
    },[])
        // Found from https://surajsharma.net/blog/axios-post-form-data
        const handleSubmit = async (e, submitData) => {
          e.preventDefault(); // Event prevent default to prevent browser refresh
          console.log(submitData)
  
          try {
              await axios({
                  method: "post",
                  url: "" ,
                  data: submitData          
              })
              .then(response => {
                  console.log('saved')
                  const fetchData = async () => {
                    const response = await fetch(API_URL)
                    const resData = await response.json()
                    console.log(resData)
                    setData(resData)
                  }
                  fetchData()
              }) 
          } catch (err){
              console.log(err)
          }
      }

  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBar />
          <Route exact path="/" component={ Home } />    
          <div className="container">
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/new-junk" component={ JunkForm } />
          </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;