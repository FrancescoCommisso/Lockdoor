const geolib = require("geolib"); //Good geolocation calculation library

//AN OBJECT USED TO ENCASPULATE ALL LOGIC REGARDING COORDINATE OPERATIONS

class Checker {
  constructor() {
    //checks distance between 2 coordinates
    this.checkDistance = locations => {
      try {
        let current = locations.current;
        let home = locations.home;
        let d = geolib.getDistance(current, home);
        console.log("Distance: " + d);
        if (d > 200) return false;
        return true;
      } catch (error) {
        console.log("Check Distance Error: " + error);
      }
    };
  }
}

module.exports = Checker;
