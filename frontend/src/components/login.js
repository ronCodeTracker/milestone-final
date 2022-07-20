import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Login() {
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
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
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