import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const CenteredForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(null);
  function handleSubmission(e) {
    e.preventDefault();
    if (!email || !pwd || !checked) return;
    alert(`You submitted email: ${email} and password: ${pwd}`);
    setShow(true);
  }
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {/* The 'd-flex' class makes the container a flex container */}
      {/* 'align-items-center' centers children vertically */}
      {/* 'justify-content-center' centers children horizontally */}
      <Form style={{ width: "400px" }} onSubmit={handleSubmission}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={show}
          />
          <Form.Text>Your email will be kept safe</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            disabled={show}
          />
          <Form.Text>Make a stronger combination of password</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            value={checked}
            onChange={(e) => setChecked(!checked)}
          />
        </Form.Group>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default CenteredForm;
