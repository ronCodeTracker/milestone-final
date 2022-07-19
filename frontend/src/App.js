import './App.css';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar />    
      </header>
      
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;