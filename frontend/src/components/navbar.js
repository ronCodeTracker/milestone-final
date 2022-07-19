import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home.js';
import Create from './create.js';
import Login from './login.js';
import { BrowserRouter } from 'react-router-dom'

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
    </><div className="Navigation">
      <BrowserRouter>  
        <Link to="/" exact component={Home} />
        <Link to="login" exact component={Login} />
        <Link to="new-junk" exact component={Create} />
    </BrowserRouter> 
  </div></>
  );
}

export default NavBar;

