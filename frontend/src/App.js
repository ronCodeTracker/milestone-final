import './App.css';
import NavBar from './components/navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-body">
        <NavBar />    
      </header>
      </BrowserRouter>
      
    </div>
  );
}

export default App;