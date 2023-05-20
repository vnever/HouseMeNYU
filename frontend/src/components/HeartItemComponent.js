import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";

const HeartItemComponent = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src="/images/carousel/carousel-1.png" fluid />
          </Col>
          <Col md={2}>
            Soho studio <br />
            4 month rental
          </Col>
          <Col md={2}>
            <b>$3000</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default HeartItemComponent;
