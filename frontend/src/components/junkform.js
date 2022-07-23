import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, handleSubmit, useState } from 'react';

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
      <Form onSubmit={(e) => handleSubmit(e, postData)} action='/' method='POST'>
              <Form.Group className="mb-3" controlId="formGroupName" value={postData.formGroupName} onChange={(e) => setPostData({ ...postData, title: e.target.value })}>
                  <Form.Label>Name of Junk</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupDescription" value={postData.formGroupDescription} onChange={(e) => setPostData({ ...postData, description: e.target.value })}>
                  <Form.Label>Desciption</Form.Label>
                  <Form.Control type="description" placeholder="Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPicture" value={postData.formGroupPicture} onChange={(e) => setPostData({...postData, image:e.target.value})}>
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="url" placeholder="Image Url" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPlace" value={postData.formGroupPlace} onChange={(e) => setPostData({...postData, image:e.target.value})}>
                  <Form.Label>Where is the junk?</Form.Label>
                  <Form.Control type="description" placeholder="Place" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
              </Button>
              <Button variant="primary" type="clear" onClick={clear}>
                  Clear
              </Button>
          </Form>
          </div></>
  );
}

export default Post;