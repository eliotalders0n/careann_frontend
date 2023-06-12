import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Header from "../common/Header";
import Personal from "../common/personal";
import Caregiver from "../common/caregiver";
import History from "../common/history";

function UserDashboard(props) {
  const [activeFilter, setActiveFilter] = useState("personal");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Container fluid>
      <Header />
      <br />
      <Row md={1}>
        <Col>
          <Button
            variant="outline-dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("personal")}
          >
            Personal
          </Button>

          <Button
            variant="outline-dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("caregiver")}
          >
            Caregiver
          </Button>

          <Button
            variant="outline-dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("pay")}
          >
            Payment
          </Button>

          {activeFilter === "personal" && <Personal />}
          {activeFilter === "caregiver" && <Caregiver />}
          {activeFilter === "pay" && <History />}
          <br />
          <Button variant="dark" className="mx-1 my-2"> 2023 Careann - profile enabled</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
