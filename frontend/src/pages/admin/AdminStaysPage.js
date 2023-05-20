import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
const deleteHandler = () => {
    if(window.confirm("Are you sure?")) alert("Product deleted!")
}
const AdminStaysPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Stay List{" "}
          <LinkContainer to="/admin/create-stays">
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Neighbourhood</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Soho studio", price: "$2500", neighbourhood: "Soho" },
              { name: "40 E 23rd S ", price: "$1500", neighbourhood: "Greenwich" },
              { name: "Brooklyn 1 bed 1 bath", price: "$1000", neighbourhood: "Brooklyn" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.neighbourhood}</td>
                <td>
                  <LinkContainer to="/admin/edit-stays">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminStaysPage