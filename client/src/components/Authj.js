import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/FormGroup";
import { firebaseApp } from "./firebaseConfig";

class Auth extends Component {
  state = { username: null, password: null, message: null };

  usernameChange = e => {
    this.setState({ username: e.target.value });
  };
  passwordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(val => {
        console.log("signed in", val);
      })
      .catch(e => {
        this.setState({ message: e.message });
        console.log("Not signed in: " + e.message);
      });
  };

  render() {
    return (
      <Container className="my-3">
        <Row>
          <Col className="text-left">
            <Form>
              <h2 className="text-center">Sign In</h2>
              <h4>Username</h4>
              <input onChange={this.usernameChange} className="form-control" />
              <h4 className="my-2">Password</h4>
              <input
                type="password"
                onChange={this.passwordChange}
                className="form-control"
              />
              <Button onClick={this.onSubmit} className="my-3 btn-block">
                Sign In
              </Button>
            </Form>

            <p className="text-center">{this.state.message}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Auth;
