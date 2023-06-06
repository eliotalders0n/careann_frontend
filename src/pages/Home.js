import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function Home(props) {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container d-flex justify-content-center my-5">
        <div
          className="card text-center col-md-8"
          style={{ border: "none", padding: "10px" }}
        >
          <div className="card-header bg-light my-3 display-5">
            Get started find a Caregiver
          </div>
          <div className="card-body my-3">
            <h3 className="card-title">
              Good <span style={{ color: "lightgreen" }}>Health</span> is Wealth
            </h3>
            <p className="card-text">
              With up to 70+ supporting organisations and 30+ registered
              clinics, We are helping over 400k patients nation wide.
            </p>
          </div>
          <div className="card-footer bg-light text-muted">
            Care<span style={{ color: "lightgreen" }}>Ann</span>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center col-md-8 my-5">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1676890578150-03af781f60e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1671561388563-5ea72ba13151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="..."
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div className="container d-flex justify-content-center my-5">
        <div className="row">
          <div className="card mb-3 col-md" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ width: "220px" }}
                  src="https://img.freepik.com/free-vector/volunteering-concept-illustration_114360-2313.jpg?w=740&t=st=1677045881~exp=1677046481~hmac=62ccb7b1249a917137079b778a1757bdd65d777cd6148baf718cbbb713667ab9"
                  className="img-fluid rounded-start my-3"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Convenient</h5>
                  <p className="card-text">
                    Easily manage your caregiving duties on-the-go with our
                    convenient caregiver app. From scheduling appointments to
                    tracking medication, we've got you covered..
                    <small className="text-muted">
                      <span style={{ color: "cadetblue" }}> CareAnn</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 1 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 col-md" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ width: "220px" }}
                  src="https://img.freepik.com/free-vector/colored-illustration-senior-woman-sitting-wheelchair-with-caregiver-isolated-white-background_1284-41426.jpg?w=740&t=st=1677045914~exp=1677046514~hmac=7bcf9247b9243adc5ddfc29b057dc6fc1fd0c63c762b609cb846f634bae8e47b"
                  className="img-fluid rounded-start my-3"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Secure</h5>
                  <p className="card-text">
                    Ensure the security and well-being of your loved ones with
                    CareAnn. Trust us to keep all your important information
                    safe and easily accessible.
                    <small className="text-muted">
                      <span style={{ color: "cadetblue" }}> CareAnn</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 5 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 col-md" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ width: "220px" }}
                  src="https://img.freepik.com/premium-vector/female-nurse-caring-old-woman_188544-2261.jpg?w=740"
                  className="img-fluid rounded-start my-3"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Growth</h5>
                  <p className="card-text">
                    We are ever expanding our reach to include more locations
                    and patients. Check back regularly for updates in your area.
                    <small className="text-muted">
                      <span style={{ color: "cadetblue" }}> CareAnn</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row text-center d-flex justify-content-center ">
          <div className="col-md-10">
            <h1 className="display-3">Subscriptions</h1>
          </div>
          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Daily</h5>
              <h6 className="card-subtitle mb-2 text-muted">ZMW250.00</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Search</li>
                <li className="list-group-item">Rate</li>
                <li className="list-group-item">
                  Recommendations based on location
                </li>
                <li className="list-group-item">Save location</li>
              </ul>
            </div>
          </div>

          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Monthly</h5>
              <h6 className="card-subtitle mb-2 text-muted">ZMW4000.00</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Search</li>
                <li className="list-group-item">Rate</li>
                <li className="list-group-item">
                  Recommendations based on location
                </li>
                <li className="list-group-item">Save location</li>
              </ul>
            </div>
          </div>

          <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Yearly</h5>
              <h6 className="card-subtitle mb-2 text-muted">USD2000</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">12% Discount</li>
                <li className="list-group-item">Search</li>
                <li className="list-group-item">Rate</li>
                <li className="list-group-item">
                  Recommendations based on location
                </li>
                <li className="list-group-item">Save location</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
