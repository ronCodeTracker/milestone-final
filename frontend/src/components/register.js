
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from 'react-router-dom';

class RegisterForm extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            passwordDigest: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            passwordDigest: this.state.passwordDigest,
            
        }
        console.log(user);
    }

    render() {
   
  
  return (
      <><header>
          <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ marginTop: '40px', fontSize: "2.5em" }}>
                            Register
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </Container>
          </header><div className="container" style={{ marginTop: '20px', width: '700px' }}>
          <Form>
              <Form.Group className="mb-3" controlId={firstName}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId={lastName}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter last name"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId={email}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId={passwordDigest}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </div></>
  );
}
}

export default RegisterForm;