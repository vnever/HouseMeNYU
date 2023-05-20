import { Container, Row, Col, Alert, ListGroup } from "react-bootstrap";
import CartItemComponent from "../components/HeartItemComponent";

const HeartedPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 1 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
          <Alert variant="info">Your hearted is empty</Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default HeartedPage;