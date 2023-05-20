import { Row, Col, Form } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminAnalyticsPage = () => {
  const data = [
      {
    name: "Jan",
    "2022 year": 3,
    "2021 year": 4,
  },
  {
    name: "Feb",
    "2022 year": 2,
    "2021 year": 3,
  },
  {
    name: "Mar",
    "2022 year": 4,
    "2021 year": 5,
  },
  {
    name: "Apr",
    "2022 year": 5,
    "2021 year": 3,
  },
  {
    name: "May",
    "2022 year": 7,
    "2021 year": 5,
  },
  {
    name: "Jun",
    "2022 year": 9,
    "2021 year": 0,
  },
  {
    name: "Jul",
    "2022 year": 0,
    "2021 year": 0,
  },
  {
    name: "Aug",
    "2022 year": 5,
    "2021 year": 6,
  },
  {
    name: "Sep",
    "2022 year": 6,
    "2021 year": 3,
  },
  {
    name: "Oct",
    "2022 year": 4,
    "2021 year": 7,
  },
  {
    name: "Nov",
    "2022 year": 6,
    "2021 year": 7,
  },
  {
    name: "Dec",
    "2022 year": 7,
    "2021 year": 7,
  },
  ];
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>New Users 11/26/2022 VS 11/27/2021</h1>
        <Form.Group controlId="firstDateToCompare">
          <Form.Label>Select First Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="firstDateToCompare"
            placeholder="First Date To Compare"
          />
        </Form.Group>
        <br />
        <Form.Group controlId="secondDateToCompare">
          <Form.Label>Select Second Date To Compare</Form.Label>
          <Form.Control
            type="date"
            name="secondDateToCompare"
            placeholder="Second Date To Compare"
          />
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{value: "TIME",offset: 50,position: "insideBottomRight",}} allowDuplicatedCategory={false} />
            <YAxis label={{value: "NEW USERS", angle: -90, position: "insideLeft"}} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2021 year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={4}
            />
            <Line type="monotone" dataKey="2022 year" stroke="#82ca9d" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default AdminAnalyticsPage;
