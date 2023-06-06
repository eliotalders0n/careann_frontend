import React from "react";
import { Col, Button, Card, Table } from "react-bootstrap";

function History(props) {
  return (
    <Col>
      <Card>
        <Card.Header>Payment and History</Card.Header>
        <Card.Body>
          <Card.Title>All your activity will show up here</Card.Title>
          <Card.Text>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>#</th>
                    <th>Month</th>
                    <th>Amount</th>
                    <th>Care type</th>
                    <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Sample {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Sample {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Sample {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <Button variant="outline-dark">Load More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default History;
