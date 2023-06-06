import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function Contact() {
  const LusakaSuburbs = [
    "Avondale",
    "Chaisa",
    "Chalala",
    "Chamba Valley",
    "Chelston",
    "Chibolya",
    "Chilenje South",
    "Chilenje North",
    "Chipata Compound",
    "Chirundu",
    "Chunga",
    "Chinyanja",
    "City Center",
    "Emmasdale",
    "Garden Compound",
    "George Compound",
    "Helen Kaunda",
    "Ibex Hill",
    "Independence Avenue",
    "Jesmondine",
    "John Howard",
    "Kabulonga",
    "Kabwata",
    "Kafue",
    "Kalikiliki",
    "Kalundu",
    "Kamanga",
    "Kanyama",
    "Kapwepwe",
    "Kasama",
    "Katanga",
    "Kuku Compound",
    "Kwacha",
    "Libala",
    "Lilanda",
    "Long Acres",
    "Los Angeles",
    "Lusaka West",
    "Makeni",
    "Mandevu",
    "Manchinchi",
    "Marapodi",
    "Matero",
    "Meanwood",
    "Misisi",
    "Mtendere",
    "Mthunzi",
    "Munali",
    "Mutendere",
    "Nancholi",
    "Ngombe Compound",
    "Northmead",
    "Olympia",
    "PHI",
    "Rhodes Park",
    "Roma",
    "Salama Park",
    "Silverest",
    "State Lodge",
    "Sunningdale",
    "Twikatane",
    "Woodlands",
  ];

  const [selectedSuburb, setSelectedSuburb] = useState("");

  const handleSelectChange = (event) => {
    setSelectedSuburb(event.target.value);
  };

  return (
    <Container>
      <Header />
      <br />
      <br />
      <br />
      <Container style={{ textAlign: "center" }}>
        <h1>Contact us</h1>
        <p className="text-muted">
          Welcome to CareAnn! We're Your Friendly Home Care Experts in Zambia.
          Get in Touch Today and Let's Make Your Life Easier!
        </p>
      </Container>
      <br />
      <br />
      <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" aria-label="With textarea" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select
              id="suburbs"
              value={selectedSuburb}
              onChange={handleSelectChange}
            >
              <option value="">Select a location</option>
              {LusakaSuburbs.map((suburb, index) => (
                <option key={index} value={suburb}>
                  {suburb}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Care type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Choose a care type</option>
              <option>Personal Care</option>
              <option>Companion Care</option>
              <option>Respite Care</option>
              <option>Skilled nursing Care</option>
              <option>Hospice Care</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default Contact;
