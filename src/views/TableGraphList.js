import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableGraphList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Graphs Table</Card.Title>
                <p className="card-category">
                  List graphs table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Graph Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableGraphList;