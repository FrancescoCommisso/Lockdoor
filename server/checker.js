const geolib = require("geolib"); //Good geolocation calculation library

//Checker objects are used to encaspulate coordinate calculation functionality

class Checker {
  constructor() {
    //checks distance between 2 coordinates
    this.checkDistance = locations => {
      let current = locations.current;
      let home = locations.home;
      let d = geolib.getDistance(current, home);
      console.log("Distance: " + d);
      if (d > 200) return false;
      return true;
    };
  }
}

module.exports = Checker;
