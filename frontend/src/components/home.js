
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Garage from './garage.js';
import Attic from './attic.js';
import Basement from './basement.js';


export default function Home () {
    return(
        <div className="home">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Junk Around the House
                        </Card.Text>
                    </Card.Body>
                </Card>
                    <body>
                        <Garage />
                        <Attic />
                        <Basement />
                    </body>
                </Container>
                </div>
    )
}