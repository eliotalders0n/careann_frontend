import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebase from "./../../firebase.js"

function Header(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const user_id = currentUser.uid;
        // fetch(`http://localhost:5002/api/users/${user_id}`)
        fetch(`https://young-earth-39894.herokuapp.com/api/users/${user_id}`)
          .then(response => response.json())
          .then(data => {
            setUser(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/", { replace: true });
        window.location.reload(false);
      });
  };

  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" style={myComponentStyles}>
              Care<span style={{ color: "lightgreen" }}>Ann</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <small className="nav-link text-muted mx-5">
              For inquiries +260 777265445 or jacksonnatasha2000@gmail.com
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
              {user && (
                <Nav>
                  <Nav.Link className="nav-link mx-1">
                    <Link style={myComponentStyles}>
                      <Badge variant="info">Logged in</Badge>
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link mx-1">
                    <Link to="/userDashboard" style={myComponentStyles}>
                      <p className="lead">{user.firstName}</p>
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link mx-1">
                    <Button size="sm" variant="outline-dark" onClick={logout}>
                      Logout
                    </Button>
                  </Nav.Link>
                </Nav>
              )}
              {!user && (
                <Nav>
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
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

const myComponentStyles = {
  textDecoration: "none",
  color: "black",
};
export default Header;
