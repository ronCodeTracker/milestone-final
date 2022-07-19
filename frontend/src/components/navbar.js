import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home.js';
import Create from './create.js';
import Login from './login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function NavBar() {
  return (
      <><>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Junk Around The House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="new-junk">New Junk</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </><div className="Display">
      <BrowserRouter>  
        <Route path="/" element={<Home />} />
        <Route path="new-junk" element={<Create />} />
        <Route path="login" element={<Login />} />
    </BrowserRouter> 
  </div></>
  );
}

export default NavBar;

