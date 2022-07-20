import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function RegisterForm () {
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
              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" placeholder="Password Confirmation" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </div></>
  );
}

export default RegisterForm;