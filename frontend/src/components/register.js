
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            passwordDigest: '',
    }
}
onChangeUserFirstName(e) {
    this.setState({ firstName: e.target.value })
}
onChangeUserLastName(e) {
    this.setState({ lastName: e.target.value })
}
onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
}
onChangeUserPassword(e) {
    this.setState({ passwordDigest: e.target.value })
}
onSubmit(e) {
    e.preventDefault()
    const userObject = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        passwordDigest: this.state.passwordDigest
    };
    axios.post('http://localhost:3000/users/register', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    this.setState({ firstName: '', lastName: '', email: '', passwordDigest: '', })
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
              <Form.Group className="mb-3" value={this.state.firstName} onChange={this.onChangeUserFirstName}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name"  />
              </Form.Group>
              <Form.Group className="mb-3" value={this.state.lastName} onChange={this.onChangeUserLastName}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter last name"  />
              </Form.Group>
              <Form.Group className="mb-3" value={this.state.email} onChange={this.onChangeUserEmail}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  />
              </Form.Group>
              <Form.Group className="mb-3" value={this.state.passwordDigest} onChange={this.onChangeUserPassword}>
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