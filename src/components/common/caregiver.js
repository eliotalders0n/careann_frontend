import React from "react";
import { Col, Button, Card, CardImg, ListGroup, Badge } from "react-bootstrap";

function Caregiver(props) {
  return (
    <Col>
      <Card>
        <Card.Header>Caregiver</Card.Header>
        <Card.Body>
          <CardImg
            style={{ maxWidth: "20vh" }}
            src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-3329.jpg?w=740&t=st=1677053484~exp=1677054084~hmac=8bd565f48ab9da88f97364e552240dc059978a65de86f7c2117aeb69828a9d4c"
            alt="caregiver profile pic"
          />
          <Card.Title>John Doe (Specialist)</Card.Title>
          <Card.Text>
            <p>
              Hey there, I have been offering my services to the elderly for 7
              years now and have gained a lot of experience and relationships
              along the way.
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item>Phone +260 0966 234 343</ListGroup.Item>
              <ListGroup.Item>Address Lusaka, Mutumbi Chelston 34</ListGroup.Item>
              <ListGroup.Item>Main Personal Caregiver</ListGroup.Item>
              <ListGroup.Item><Badge bg="success">Available</Badge></ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button variant="dark">Remove</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Caregiver;
