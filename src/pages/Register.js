import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import firebase from "./../firebase.js";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create user in Firebase
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      // Get the UID of the created user
      const uid = user.uid;
  
      // Save the UID to MongoDB
       await axios.post(
        // "https://young-earth-39894.herokuapp.com/api/users/create",
        "http://localhost:5002/api/users/create",
        {
          firstName,
          lastName,
          email,
          password,
          phone,
          address,
          age,
          gender,
          fid: uid // Assign the UID as the fid field in MongoDB
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRegister(true)
      navigate('/register');
    } catch (error) {
      console.error("Error:", error);
    }

    // if (register) {
    //   // User registration successful
    //   alert("User registration successful");
      
    // }
  };


  

  return (
    <Container fluid>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstNName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="Zip"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Agree to terms and condition" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
