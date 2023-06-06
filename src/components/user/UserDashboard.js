import React, {useState} from "react";
import { Col, Container, Nav, Row, } from "react-bootstrap";
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
      <Row>
        <Col>
          <Nav className="flex-column">
            <Nav.Link eventKey="link-0">
              <h2
                className="display-2"
                style={{ color: "black" }}
                onClick={() => handleFilterClick("personal")}
              >
                Personal Details
              </h2>
            </Nav.Link>
            <Nav.Link eventKey="link-1">
              <h2
                className="display-2"
                style={{ color: "black" }}
                onClick={() => handleFilterClick("caregiver")}
              >
                Your Caregiver
              </h2>
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <h2
                className="display-2"
                style={{ color: "black" }}
                onClick={() => handleFilterClick("pay")}
              >
                Payment and History
              </h2>
            </Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              2023 Careann / profile enabled
            </Nav.Link>
          </Nav>
        </Col>

        {activeFilter === "personal" && <Personal />}
        {activeFilter === "caregiver" && <Caregiver />}
        {activeFilter === "pay" && <History />}
      </Row>
    </Container>
  );
}

export default UserDashboard;
