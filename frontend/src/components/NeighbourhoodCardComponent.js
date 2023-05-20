import { Card, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const NeighbourhoodCardComponent  = ({neighbourhood, idx}) => {
    const images = [
        "/images/soho.png", 
        "/images/greenwich.png", 
        "/images/queens.png", 
        "/images/brooklyn.png",

    ];
    return (
      <Card>
        <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
        <Card.Body>
          <Card.Title>{neighbourhood}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <LinkContainer to="/stay-list">
            <Button variant="primary">Go to the Neighbourhood</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  };

export default NeighbourhoodCardComponent
