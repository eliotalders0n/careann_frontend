import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function Verification(props) {
  return (
    <div className="container-fluid">
      <h1>Login</h1>
      <div className="form" style={{ textAlign: "center" }}>
        <h1
          style={{
            width: "100%",
            padding: "50px",
          }}
        >
          Verification
        </h1>
        <p
          style={{
            width: "100%",
            padding: "20px",
          }}
        >
          Enter the code from the sms
          <br /> we sent you
        </p>

        <p
          style={{
            width: "100%",
            padding: "15px",
          }}
        >
          03:00
        </p>

        <InputGroup className="mb-1">
          <Form.Control type="number" placeholder="-" />
          <Form.Control type="number" placeholder="-" />
          <Form.Control type="number" placeholder="-" />
          <Form.Control type="number" placeholder="-" />
          <Form.Control type="number" placeholder="-" />
        </InputGroup>

        <div
          className="fixed-bottom justify-content-center d-grid gap-2"
          style={{ padding: "20px" }}
        >
          <Button
            style={{
              width: "100%",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            size="lg"
            variant="success"
            type="submit"
          >
            Submit
          </Button>

          <p>
            I didn’t receive the code! <b>Resend</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Verification;
