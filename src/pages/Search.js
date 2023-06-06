import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import Header from "../components/common/Header";

function Search(props) {
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
      <Container>
        <h1 className="my-3">Find a caregiver in your area</h1>
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
            <Form.Select>
              <option>Choose a care type</option>
              <option>Personal Care</option>
              <option>Companion Care</option>
              <option>Respite Care</option>
              <option>Skilled nursing Care</option>
              <option>Hospice Care</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Container>

      <Container>
        <Row className="my-5">
          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=740&t=st=1677053451~exp=1677054051~hmac=79b85b168c8c16e8b023a8b60757556063bd54e91d6a1386833aaf200b4d02ca"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3806.jpg?w=740&t=st=1677053465~exp=1677054065~hmac=18c1e06a48631d11f95298a25315c03eff746a779d98dd7c28cc3f72ef438474"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-3329.jpg?w=740&t=st=1677053484~exp=1677054084~hmac=8bd565f48ab9da88f97364e552240dc059978a65de86f7c2117aeb69828a9d4c"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-pic-concept-illustration_114360-837.jpg?w=740&t=st=1677053525~exp=1677054125~hmac=b7be01006be65996473319c8da789c24a2b95c24b8743269c5c9ae4d0686a9f8"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=740&t=st=1677053451~exp=1677054051~hmac=79b85b168c8c16e8b023a8b60757556063bd54e91d6a1386833aaf200b4d02ca"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3806.jpg?w=740&t=st=1677053465~exp=1677054065~hmac=18c1e06a48631d11f95298a25315c03eff746a779d98dd7c28cc3f72ef438474"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-3329.jpg?w=740&t=st=1677053484~exp=1677054084~hmac=8bd565f48ab9da88f97364e552240dc059978a65de86f7c2117aeb69828a9d4c"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="my-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-vector/profile-pic-concept-illustration_114360-837.jpg?w=740&t=st=1677053525~exp=1677054125~hmac=b7be01006be65996473319c8da789c24a2b95c24b8743269c5c9ae4d0686a9f8"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Search;
