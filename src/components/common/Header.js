import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={myComponentStyles}>
              Care<span style={{ color: "lightgreen" }}>Ann</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <small className="nav-link text-muted mx-5">
              For inquires +260 777265445 or jacksonnatasha2000@gmail.com
            </small>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-link mx-1">
                <Link to="/search" style={myComponentStyles}>
                  Search
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link mx-1">
                <Link to="/aboutus" style={myComponentStyles}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link mx-1">
                <Link to="/contact" style={myComponentStyles}>
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link mx-1">
                <Link to="/login" style={myComponentStyles}>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link mx-1">
                <Link to="/register" style={myComponentStyles}>
                  Signup
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const myComponentStyles = {
  textDecoration: "none",
  color: "black",
};
export default Header;
