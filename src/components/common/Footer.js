import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <Container
      className="justify-content-center d-grid gap-2"
      style={{ backgroundColor: "#90eebf" }}
    >
      <Row className="my-5">
        <h2>
          Care<span style={{ color: "green" }}>Ann</span>
        </h2>
        <Col sm style={{ padding: "10px" }}>
          <p>Connect Follow Get Social with us</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/168/168802.png?w=740&t=st=1677050900~exp=1677051500~hmac=4279ee8153febe5b0d0ab718551916dc46460761041ba43d2ff661bdce1d056b"
            style={{ width: "30px" }}
            alt="twitter logo"
            className="mx-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889102.png?w=740&t=st=1677051004~exp=1677051604~hmac=24e0618c7d9e8ceb30016ffc99b5952e35b599207d79d035b595406800e3f320"
            style={{ width: "30px" }}
            alt="facebook logo"
            className="mx-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png?w=740&t=st=1677051024~exp=1677051624~hmac=14dc6562af935049352e6f3ce874d0e356fafbe1ef56559705c623c7269808cf"
            style={{ width: "30px" }}
            alt="instagram logo"
            className="mx-2"
          />
        </Col>

        <Col sm>
          <ul style={{ padding: "10px" }}>
            <p>Terms and Conditions</p>
            <p>Policies</p>
            <p>Help</p>
            <p>FAQ</p>
          </ul>
        </Col>

        <Col sm>
          <ul style={{ padding: "10px" }}>
            <p>Copyright © CareAnn 2023</p>
            <p>All rights reserved</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
