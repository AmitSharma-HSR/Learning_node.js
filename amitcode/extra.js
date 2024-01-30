// const setInterwalfunction = (e) => {
//     console.log(e, Date.now())
// }

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
    }
  
    brake() {
      this.speed -= 5;
    }
  
    getSpeed() {
      return this.speed;
    }
  }
  
  let myCar = new Car("Toyota", "Camry");
  myCar.accelerate();
  myCar.brake()
  console.log(myCar.getSpeed()); // Output: 10
  