// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Navbar bg="light" expand="xl">
        <Navbar.Brand href="#home">My first react-bootstrap </Navbar.Brand>
        {/* <Navbar.Text href="">This is random text</Navbar.Text> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <Col>
          <h1>Hello, Bootstrap in React!</h1>
          <p>This is a Bootstrap-powered React application.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
