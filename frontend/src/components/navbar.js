import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './home.js';
import Garage from './garage.js';
import Attic from './attic.js';
import Basement from './basement.js';
import Create from './create.js';
import Login from './login.js';
import Search from './search.js';



function NavBar() {
  return (
    <><Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
              <Navbar.Brand href="/">Junk Around The House</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/junk">create</Nav.Link>
                      <NavDropdown title="Rooms" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="/garage">Garage</NavDropdown.Item>
                          <NavDropdown.Item href="/attic">
                              Attic
                          </NavDropdown.Item>

                          <NavDropdown.Item href="/basement">
                              Basement
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/login">Login</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search" />
                      <Button variant="outline-success">Search</Button>
                  </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar><div className="Display">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/garage" element={<Garage />} />
                  <Route path="/attic" element={<Attic />} />
                  <Route path="/basement" element={<Basement />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<Search />} />
              </Routes>
          </div></>
  )
}

export default NavBar;