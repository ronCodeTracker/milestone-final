import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';


const Login = ({login, isAuthenticated}) => {

    const [ formData, setFormData ] = useState({
      email: '',
      passwordDigest: '',
    });
  
    const { email, passwordDigest } = formData;
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  
    const onSubmit = async e => {
      e.preventDefault();
      login(email, passwordDigest);
    };
  
    if(isAuthenticated){
      return <Redirect to='/' />;
    }

  return (
      <><header>
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ marginTop: '40px', fontSize: "2.5em" }}>
                            Login
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </Container>
      </header><div className="container" style={{ marginTop: '20px', width: '700px' }}>
              <Form>
                  <Form.Group className="mb-3" controlId={email}>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
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

export default Login;