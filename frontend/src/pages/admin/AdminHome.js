import { Row, Col, Table } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminHome = () => {
  return (
    <Row className="m-5">
        <Col md={2}>
        <AdminLinksComponent />
        </Col>
      <Col md={10}>
        <h1>Home</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Mark Twain</td>
                  <td>2022-09-12</td>
                  <td>$4000</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminHome