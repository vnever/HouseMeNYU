import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddedToHeartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>You hearted this stay!</Alert.Heading>
      <p>
        <Button variant="success">Go back</Button>{" "}
        <Link to="/hearted">
          <Button variant="danger">Go to hearted</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToHeartMessageComponent;
