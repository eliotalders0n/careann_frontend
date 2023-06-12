import React, { useState, useEffect } from "react";
import { Col, Button, Card, Form, Row, Badge } from "react-bootstrap";
import axios from "axios";
import firebase from "./../../firebase.js";

const updateUser = async (data, userID) => {
  try {
    const response = await axios.put(
      `https://young-earth-39894.herokuapp.com/api/users/update/${userID}`, // Replace with your API endpoint URL
      // `http://localhost:5002/api/users/update/${userID}`, // Replace with your API endpoint URL
      data
    );
    console.log("the response" + response);
    return response.data;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

function Personal(props) {
  const [userData, setUserData] = useState({});
  const [updatedUser, setUpdatedUser] = useState(null);
  const [error, setError] = useState(null);
  const currentUser = firebase.auth().currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        if (currentUser) {
          const userId = currentUser.uid;
          const response = await fetch(
            `https://young-earth-39894.herokuapp.com/api/users/${userId}`
            // `http://localhost:5002/api/users/${userId}`
          );
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentUser) {
        const userId = currentUser.uid;
        const response = await updateUser(userData, userId);
        setUpdatedUser(response);
        setError(null);
      }
    } catch (error) {
      setUpdatedUser(null);
      setError(error.message);
    }
  };

  return (
    <Col>
      <Card>
        <Card.Header>Personal</Card.Header>
        <Card.Body>
          {error && <p>{error}</p>}
          {updatedUser && (
            <div>
              <h3>Status</h3>
              <pre>
                <Badge variant="info">Updated</Badge>
              </pre>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstNName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={userData.firstName || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={userData.lastName || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={userData.email || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={userData.password || ""}
                  onChange={handleInputChange}
                />
              </Form.Group> */}
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={userData.address || ""}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={userData.phone || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  defaultValue={userData.gender || ""}
                  onChange={handleInputChange}
                  name="gender"
                >
                  <option>Choose...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={userData.age || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Personal;
