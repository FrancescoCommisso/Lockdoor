const geolib = require("geolib");

//CHECKER IS AN OBJECT THAT WOULD ENCAPSULATE ALL COORDINATE CHECKING FUNCTIONALITY

class Checker {
  constructor() {
    this.checkDistance = locations => {
      let current = locations.current;
      let home = locations.home;
      let d = geolib.getDistance(current, home);
      console.log("Distance: " + d);
      if (d > 10) return false;
      return true;
    };
  }
}

module.exports = Checker;
