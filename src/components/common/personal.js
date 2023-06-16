import React, { useState, useEffect } from "react";
import { Col, Button, Card, Form, Row, Badge, Nav } from "react-bootstrap";
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
  const [healthStatus, setHealthStatus] = useState(null);
  const [careNeeds, setCareNeeds] = useState(null);
  const [social, setSocial] = useState([]);
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
          setHealthStatus(data.health_status);
          setCareNeeds(data.care_needs);
          setSocial(data.social);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [currentUser]);

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

  const handleCareNeedsChange = (e) => {
    setUserData({
      ...userData,
      care_needs: { ...userData.care_needs, [e.target.name]: e.target.value },
    });
  };

  const handleSocialChange = (e) => {
    setUserData({
      ...userData,
      social: { ...userData.social, [e.target.name]: e.target.value },
    });
  };

  const handleHealthStatusChange = (e) => {
    setUserData({
      ...userData,
      health_status: {
        ...userData.health_status,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleCareNeedsSubmit = async (e) => {
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

  const handleSocialSubmit = async (e) => {
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

  const handleHealthStatusSubmit = async (e, index) => {
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

  const [activeFilter, setActiveFilter] = useState("personal");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Col>
      <Nav
        variant="underline"
        className="justify-content-center"
        defaultActiveKey="link-0"
      >
        <Nav.Item>
          <Button
            variant="dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("personal")}
          >
            Personal
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("care")}
          >
            Care
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("social")}
          >
            Social
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="dark"
            className="mx-1 my-2"
            onClick={() => handleFilterClick("health")}
          >
            Health Status
          </Button>
        </Nav.Item>
      </Nav>

      {activeFilter === "care" && (
        <Card>
          <Card.Header>Care</Card.Header>
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
            <Form onSubmit={handleCareNeedsSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="typeOfCare">
                  <Form.Label>Type of Care</Form.Label>
                  <Form.Select
                    onChange={handleCareNeedsChange}
                    name="type_of_care"
                  >
                    <option value="">Choose a care type</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Companion Care">Companion Care</option>
                    <option value="Respite Care">Respite Care</option>
                    <option value="Skilled nursing Care">
                      Skilled nursing Care
                    </option>
                    <option value="Hospice Care">Hospice Care</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="Frequency">
                  <Form.Label>Frequency</Form.Label>
                  <Form.Select
                    onChange={handleCareNeedsChange}
                    name="frequency"
                  >
                    <option value="">How many times per month</option>
                    <option value="4">4 days/month</option>
                    <option value="8">8 days/month</option>
                    <option value="12">12 days/month</option>
                    <option value="14">14 days/month</option>
                    <option value="18">18 days/month</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="Goal">
                  <Form.Label>Goal</Form.Label>
                  <Form.Select onChange={handleCareNeedsChange} name="goals">
                    <option value="">What do you expect?</option>
                    <option value="ADLs">
                      Assistance with Activities of Daily Living (ADLs)
                    </option>
                    <option value="Medication Management">
                      Medication Management
                    </option>
                    <option value="Mobility Support">Mobility Support</option>
                    <option value="Companionship">Companionship</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Rehabilitation Support">
                      Rehabilitation Support
                    </option>
                    <option value="Dementia or Alzheimer's Care">
                      Dementia or Alzheimer's Care
                    </option>
                    <option value="Respite Care">Respite Care</option>
                    <option value="End-of-Life Care">End-of-Life Care</option>
                    <option value="Household Tasks">Household Tasks</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              {careNeeds.map((care) => {
                return (
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Care Plan Summary</Form.Label>
                    <p className="lead">
                      Time Schedule: Saturday and Sunday, 8:00 AM - 10:00 AM
                      about {care.frequency} days/month
                      <br />
                      Preferred Care Type: {care.type_of_care}
                      <br /><br />
                      Support Goal: To ensure{" "}
                      <span style={{ fontWeight: 600 }}>
                        {userData.firstName} {userData.lastName}
                      </span>{" "}
                      recieves the service of{" "}
                      <span style={{ fontWeight: 600 }}>
                        {care.type_of_care}
                      </span>{" "}
                      as prescribed and assist them{" "}
                      <span style={{ fontWeight: 600 }}>
                        {care.frequency} times
                      </span>{" "}
                      a month, enabling an active and independent lifestyle.
                    </p>
                  </Form.Group>
                );
              })}
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
      {activeFilter === "health" && (
        <Card>
          <Card.Header>Health</Card.Header>
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
            <Form onSubmit={handleHealthStatusSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="btn3">
                  <Form.Label>Medical History</Form.Label>
                  <br />
                  <Button variant="outline-dark">Upload Medical data</Button>
                </Form.Group>

                <Form.Group as={Col} controlId="currentMedication">
                  <Form.Label>Current Medication</Form.Label>
                  <Form.Select
                    onChange={handleHealthStatusChange}
                    name="currentMedication"
                  >
                    <option value="Active">Actively Taking</option>
                    <option value="Deactive">Not Actively Taking</option>
                    <option value="pending">Finished (Waiting)</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="allergies">
                  <Form.Label>Allergies</Form.Label>
                  <Form.Select
                    onChange={handleHealthStatusChange}
                    name="allergies"
                  >
                    <option value="Medication Allergies">
                      Medication Allergies: Allergies to specific medications,
                      such as penicillin, sulfa drugs, aspirin, or non-steroidal
                      anti-inflammatory drugs (NSAIDs).
                    </option>
                    <option value="Food Allergies">
                      Food Allergies: Common food allergies can include peanuts,
                      tree nuts (e.g., almonds, walnuts), dairy products, eggs,
                      shellfish (e.g., shrimp, crab), soy, wheat, or gluten.
                    </option>
                    <option value="Environmental Allergies">
                      Environmental Allergies: Allergies to environmental
                      factors, such as pollen, dust mites, pet dander, mold
                      spores, or certain chemicals (e.g., latex, cleaning
                      products).
                    </option>
                    <option value="Insect Sting Allergies">
                      Insect Sting Allergies: Allergies to insect venom from
                      bees, wasps, hornets, or fire ants.
                    </option>
                    <option value="Latex Allergy">
                      Latex Allergy: Allergy to latex products, such as gloves,
                      balloons, or certain medical devices.
                    </option>
                    <option value="Allergic Rhinitis">
                      Allergic Rhinitis: Allergies that cause symptoms like
                      sneezing, itching, and congestion due to allergens like
                      pollen, dust, or mold.
                    </option>
                    <option value="Contact Dermatitis">
                      Contact Dermatitis: Allergic reactions to certain
                      substances that come in contact with the skin, such as
                      certain metals (e.g., nickel), cosmetics, fragrances, or
                      latex.
                    </option>
                    <option value="Drug Allergies">
                      Drug Allergies: Allergies to specific classes of drugs
                      like antibiotics (e.g., penicillin, cephalosporins),
                      non-steroidal anti-inflammatory drugs (NSAIDs), or
                      anesthetics.
                    </option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Disability</Form.Label>
                  <Form.Select
                    onChange={handleHealthStatusChange}
                    name="disability"
                  >
                    <option value="">Do you have a disability?</option>
                    <option value="Mobility Impairments">
                      Mobility Impairments: Disabilities that affect a person's
                      ability to move or walk, such as paralysis, amputation,
                      spinal cord injuries, or muscular dystrophy.
                    </option>
                    <option value="Visual Impairments">
                      Visual Impairments: Disabilities that impact vision,
                      ranging from partial sight or low vision to total
                      blindness.
                    </option>
                    <option value="Hearing Impairments">
                      Hearing Impairments: Disabilities that affect the ability
                      to hear, varying from partial hearing loss to complete
                      deafness.
                    </option>
                    <option value="Cognitive Disabilities">
                      Cognitive Disabilities: Disabilities that impact cognitive
                      functions, including intellectual disabilities, learning
                      disabilities, or memory impairments.
                    </option>
                    <option value="Developmental Disabilities">
                      Developmental Disabilities: Disabilities that affect a
                      person's physical, intellectual, or emotional development,
                      such as autism spectrum disorders or Down syndrome.
                    </option>
                    <option value="Psychiatric Disabilities">
                      Psychiatric Disabilities: Disabilities that affect mental
                      health and psychiatric conditions, including depression,
                      anxiety disorders, bipolar disorder, or schizophrenia.
                    </option>
                    <option value="Speech and Language Disabilities">
                      Speech and Language Disabilities: Disabilities that impact
                      speech production or language comprehension, such as
                      stuttering, aphasia, or speech apraxia.
                    </option>
                    <option value="Neurological Disabilities">
                      Neurological Disabilities: Disabilities related to the
                      nervous system, including conditions like epilepsy,
                      multiple sclerosis (MS), Parkinson's disease, or cerebral
                      palsy.
                    </option>
                    <option value="Chronic Health Conditions">
                      Chronic Health Conditions: Disabilities resulting from
                      chronic health conditions, such as chronic pain
                      conditions, asthma, diabetes, or autoimmune disorders.
                    </option>
                    <option value="Sensory Processing Disorders">
                      Sensory Processing Disorders: Disabilities that affect
                      sensory processing, causing difficulties in sensory
                      integration, sensory modulation, or sensory
                      seeking/avoiding behaviors.
                    </option>
                  </Form.Select>
                </Form.Group>
                {healthStatus.map((health) => {
                  return (
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <br />
                      <br />
                      <Form.Label>Health Information Summary</Form.Label>
                      <p className="lead">
                        Current Medication: {health.currentMedication}
                        <br />
                        Allergies: {health.allergies}
                        <br />
                        Disability: {health.disability}
                        <br />
                        <br />
                        <br />
                        Summary:{" "}
                        <span style={{ fontWeight: 600 }}>
                          {userData.firstName} {userData.lastName}
                        </span>
                        , a spirited individual, bravely faced the challenges of{" "}
                        <span style={{ fontWeight: 600 }}>
                          {health.currentMedication}
                        </span>{" "}
                        medication,{" "}
                        <span style={{ fontWeight: 600 }}>
                          {health.allergies}
                        </span>
                        , and{" "}
                        <span style={{ fontWeight: 600 }}>
                          {health.disability}
                        </span>
                        , embracing life with determination and resilience.
                      </p>
                    </Form.Group>
                  );
                })}
              </Row>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
      {activeFilter === "social" && (
        <Card>
          <Card.Header>Social</Card.Header>
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
            <Form onSubmit={handleSocialSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstNName">
                  <Form.Label>Language</Form.Label>
                  <Form.Select onChange={handleSocialChange} name="language">
                    <option value="">What language do you speak?</option>
                    <option value="Bemba">Bemba</option>
                    <option value="Nyanja">Nyanja</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Lozi">Lozi</option>
                    <option value="Lunda">Lunda</option>
                    <option value="Kaonde">Kaonde</option>
                    <option value="Luvale">Luvale</option>
                    <option value="Tumbuka">Tumbuka</option>
                    <option value="English">English</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Religion</Form.Label>
                  <Form.Select onChange={handleSocialChange} name="religion">
                    <option value="">What do you believe in?</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Islam">Islam</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="African Traditional Religions">
                      African Traditional Religions
                    </option>
                    <option value="Bahá'í Faith">Bahá'í Faith</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Jainism">Jainism</option>
                    <option value="Rastafari">Rastafari</option>
                    <option value="Atheism">Atheism</option>
                    <option value="Agnosticism">Agnosticism</option>
                    <option value="Other">
                      Other Indigenous and Folk Religions
                    </option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Race</Form.Label>
                  <Form.Select onChange={handleSocialChange} name="race">
                    <option value="none">What your origins?</option>
                    <option value="Caucasian or White">
                      Caucasian or White
                    </option>
                    <option value="African or Black">African or Black</option>
                    <option value="Asian">Asian</option>
                    <option value="Native American or Indigenous">
                      Native American or Indigenous
                    </option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Multiracial or Mixed Race">
                      Multiracial or Mixed Race
                    </option>
                  </Form.Select>
                </Form.Group>
              </Row>
              {social.map((social) => {
                return (
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Social Information Summary</Form.Label>
                    <p className="lead">
                      Language: {social.language}
                      <br />
                      Religion: {social.religion}
                      <br />
                      Race: {social.race}
                      <br />
                      <br />
                      <br />
                      Summary : <span style={{ fontWeight: 600 }}>
                        {userData.firstName} {userData.lastName}
                      </span>{" "}, a proud individual, spoke <span style={{ fontWeight: 600 }}>{social.language}</span>,
                      followed the <span style={{ fontWeight: 600 }}>{social.religion}</span> Faith, and cherished their <span style={{ fontWeight: 600 }}>{social.race}</span> heritage, embodying the beauty of
                      cultural diversity.
                    </p>
                  </Form.Group>
                );
              })}
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {activeFilter === "personal" && (
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
                    <option value="">{userData.gender || ""}</option>
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
      )}
    </Col>
  );
}

export default Personal;
