import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home from "./components/Home";
import Auth from "./components/Authj";

class App extends Component {
  state = {};

  render() {
    return (
      <Container className="text-left">
        <Row>
          <Col>
            <h1>LockDoor</h1>
            <p>Never Forget To Lock Your Door Again!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Home />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
