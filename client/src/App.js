import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class App extends Component {
  state = {};

  componentDidMount() {
    fetch("/test", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <Container className="">
        <Row className="text-center">
          <Col>
            <h1>LockDoor</h1>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button>Set Home Location</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
