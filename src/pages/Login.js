import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://young-earth-39894.herokuapp.com/api/users/login",
        // "http://localhost:5002/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // User login successful
        const data = await response.json();
        // console.log("user : " , data.user); // Do something with the response data
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("session : " + localStorage.getItem("user"));
        navigate('/search');
      } else {
        // User login failed
        const errorData = await response.json();
        console.log(errorData); // Do something with the error response data
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

          <Form.Group as={Col} controlId="lastName">
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
