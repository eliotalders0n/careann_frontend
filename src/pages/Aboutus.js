import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function Aboutus(props) {
  return (
    <Container>
      <Header />
      <Container style={{ textAlign: "center" }}>
        <Col>
          <h1 className="text-muted">About us</h1> <br />
          <h4>We want to help and we care alot</h4>
          <p className="text-muted">
            At CareAnn, we provide compassionate and professional home care
            services that empower
            <br /> individuals to maintain their independence, dignity, and
            quality of life.
            <br />
            <br /> We believe in treating each person with respect, kindness,
            and empathy, <br />
            and we are committed to delivering the highest standards of care.
            <br />
            <br /> Our mission is to make a positive difference in the lives of
            those we serve by
            <br /> providing personalized care that promotes healing and
            wellbeing.
          </p>
        </Col>
        <Row>
          <br />
          <Col>
            <Container>
              <Image
                fluid
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1525336778665-96f9a12c5c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="mother 1"
              />
            </Container>
          </Col>
          <Row xs="auto" className="my-5">
            <Col className="col-md-4 my-5">
              <h3 className="text-muted">
                A remarkable woman who devoted her life to caring for her family
                and others.
                <br />
                <br /> She had a passion for home care that was contagious, and
                it inspired me to continue her legacy. <br />
                <br />
                After her passing, I made a promise to carry on her dream of
                providing compassionate and professional care to those in need.
              </h3>
            </Col>
            <Col>
              <img
                style={{ width: "100%" }}
                src="https://img.freepik.com/free-vector/nursing-home-abstract-concept-vector-illustration-nursing-facility-residential-home-physical-therapy-care-service-senior-people-retiree-long-term-stay-rest-house-abstract-metaphor_335657-4090.jpg?w=740&t=st=1677241395~exp=1677241995~hmac=2df8be2061210d6d015d90146cfbd436218f3ed38af2ac079d834c2ac46f73c2"
                alt="mother 2"
              />
            </Col>
          </Row>
          <Row xs="auto">
            <Col className="col-md-4">
              <h3 className="text-muted">
                Her approach to home care was based on the belief that every
                individual deserves to be treated with dignity, respect, and
                kindness. <br />
                <br />
                She understood that each person is unique, with their own set of
                needs and challenges, and that a one-size-fits-all approach is
                never sufficient.
                <br />
              </h3>
            </Col>
            <Col>
              <img
                style={{ width: "100%" }}
                src="https://img.freepik.com/free-vector/doctor-home-concept-illustration_114360-7230.jpg?w=740&t=st=1677242273~exp=1677242873~hmac=190d148216b0951a9375bd83e08cdcea187528c30c6ac74aad690245b3e0f216"
                alt="mother 3"
              />
            </Col>
            <br />
            <Col>
              <h1>
                She was always willing to go the extra mile to ensure that her
                patients received the care they needed, whether it was physical,
                emotional, or spiritual.
              </h1>
            </Col>
          </Row>
          <Row xs="auto" className="my-5">
            <Col>
              <img
                style={{ width: "100%" }}
                src="https://img.freepik.com/free-vector/care-disabled-abstract-illustration_335657-5644.jpg?w=740&t=st=1677242292~exp=1677242892~hmac=8a615bfbe16d43e4acf6824233a092599dc34117a62c084beed3a546a30edee8"
                alt="mother 4"
              />
            </Col>
            <Col className="col-md-4">
              <h3 className="text-muted">
                In her memory, I have founded a home care company that embodies
                her spirit and philosophy.
                <br />
                <br /> We provide high-quality care that is tailored to the
                unique needs of each individual, and we treat our patients with
                the same compassion and respect that my grandmother showed to
                her own patients.
                <br />
                <br /> We strive to make a positive difference in the lives of
                those we serve, just as my grandmother did.
              </h3>
            </Col>
          </Row>
          <Row xs="auto" className="my-5">
            <Col>
              <img
                style={{ width: "100%" }}
                src="https://img.freepik.com/premium-vector/caregiver-caring-about-elderly-man-lying-bed-social-worker-help-old-senior-person-with-drink-nurse-assistance-support-aged-patient-flat-vector-illustration-isolated-white-background_633472-953.jpg?w=740"
                alt="mother 5"
              />
            </Col>
            <Col className="col-md-4">
              <h3 className="text-muted">
                Although my grandmother is no longer with us, her legacy lives
                on through the work we do every day. <br />
                <br />I am proud to continue her dream of providing exceptional
                home care, and I know that she would be proud of the work we are
                doing to honor her memory.
              </h3>
            </Col>
          </Row>
          <p className="text-muted">
            <br />
            <br /> We are dedicated to continuing the legacy of our founder and
            making home care accessible to all who need it. CareAnn was founded
            in 2023 by Marie Jackson
          </p>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Aboutus;
