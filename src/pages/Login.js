import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import firebase from "./../firebase.js";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedin, setLoggedin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Successfully logged in!");
      alert("User Login successful");
      navigate('/search'); // navigate to dashboard
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  // if (loggedin) {
  //   alert("User registration successful");
  //   return <Navigate to="/search" />; // navigate to dashboard
  //   // navigate('/search'); // navigate to dashboard
  // }
  //   "https://young-earth-39894.herokuapp.com/api/users/login",
  //   // "http://localhost:5002/api/users/login",

  return (
    <Container>
      <Header />
      <br />
      <h3 className="display-3 text-center">Login</h3>
      <br />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="current-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>
        <p>Almost there..</p>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
