import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    homeLocation: { latitude: null, longitude: null },
    currentLocation: { longitude: null, longitude: null },
    atHome: null
  };
  componentDidMount() {
    this.setPositionWatcher(); //set position watcher only after component has mounted
  }

  setPositionWatcher = () => {
    navigator.geolocation.watchPosition(
      position => {
        this.setState(
          {
            currentLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null
            }
          },
          () => {
            //only calculate distance if homeLocation is set
            if (this.state.homeLocation.latitude) this.checkDistance();
          }
        );
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0,
        distanceFilter: 1
      }
    );
  };

  //send currentLocation and homeLocation to server for distance calculation
  checkDistance = () => {
    let locations = {
      current: this.state.currentLocation,
      home: this.state.homeLocation
    };
    //returns true if distance between currentLocation and homeLocation
    // is less than 200. Otherwise returns false.
    fetch("/api/checkDistance", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locations)
    })
      .then(res => res.json())
      .then(state => this.setState(state));
  };

  setHomeLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      success => {
        this.setState({
          homeLocation: {
            latitude: success.coords.latitude,
            longitude: success.coords.longitude
          }
        });
        console.log(success.coords.latitude);
      },
      failure => {
        console.log(failure.message);
      }
    );
  };

  render() {
    let message;
    //check to see if geolocation is enabled
    // chrome and firefox have been changing the permissions for geolocation
    // so i had to hack my way around it
    if (this.state.currentLocation.latitude == null) {
      message = "Please allow Geolocation Permissions in Browser";
    } else {
      //check if home location is set
      if (this.state.atHome == null) message = "Please Set Home Location.";
      else if (this.state.atHome == true) message = "You're at Home!";
      else message = "Lock Your Door!";
    }

    return (
      <Container className="text-center">
        <Row className="my-2">
          <Col className="border py-2">
            <h4 className="text-left">Your Current Location</h4>
            <h5>{`{ ${this.state.currentLocation.latitude},${
              this.state.currentLocation.longitude
            }  }`}</h5>
          </Col>
        </Row>
        <Row className="my-2">
          <Col className="border py-2">
            <h4 className="text-left">Your Home Location</h4>
            <h5>{`{ ${this.state.homeLocation.latitude},${
              this.state.homeLocation.longitude
            }  }`}</h5>
            <Button className="btn-block my-2" onClick={this.setHomeLocation}>
              Set Home Location
            </Button>
          </Col>
        </Row>

        <Row className="my-2">
          <Col className="border py-2">
            <h4>{message}</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
