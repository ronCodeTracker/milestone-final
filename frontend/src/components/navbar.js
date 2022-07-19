import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home.js';
import Create from './create.js';
import Login from './login.js';



export default function NavBar() {
    
    return (
        <><>
        <Navbar bg="light" variant="light" fixed="top">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/create">Create</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </> {Routes()}</>
)

    function Routes() {
        return <div className="Display">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>;
    }
}

