import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function Post({handleSubmit}) {
   
        let [postData, setPostData] = useState({ formGroupName: '', formGroupDescription: '', formGroupPicture: '', formGroupPlace: '' })
        const clear = () => {
            setPostData({ formGroupName: '', formGroupDescription: '', formGroupPicture: '', formGroupPlace: '' })
        }
  return (
      <><header>
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ marginTop: '40px', fontSize: "2.5em" }}>
                            New Junk
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
      </header><div className="container" style={{ marginTop: '20px', width: '700px' }}>
      <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name of Junk</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDescription">
                  <Form.Label>Desciption</Form.Label>
                  <Form.Control type="description" placeholder="Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPicture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="url" placeholder="Image Url" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPlace">
                  <Form.Label>Where is the junk?</Form.Label>
                  <Form.Control type="description" placeholder="Place" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Done
              </Button>
          </Form>
          </div></>
  );
}

export default Post;