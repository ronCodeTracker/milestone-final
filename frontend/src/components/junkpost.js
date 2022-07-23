import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const JunkPost = (props) => {

    const display = props.data.map((data, i ) => {
        return(
            alsjkdf
        )
    })

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Description
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </Card>
    )
}

export default JunkPost