class Car {
    // Static property
    static numberOfCars = 0;
  
    // Constructor for instance properties
    constructor(color) {
      this.color = color; // Instance property
      Car.numberOfCars++; // Increment the static property
    }
  
    // Static method
    static displayNumberOfCars() {
      console.log(`Total cars: ${Car.numberOfCars}`);
    }
  
    // Instance method
    displayColor() {
      console.log(`Car color: ${this.color}`);
    }
  }
  
  // Create instances (objects) of Car
  let car1 = new Car('red');
  let car2 = new Car('blue');
  let car3 = new Car('green');
  
  // Call the static method using the class
  Car.displayNumberOfCars(); // Output: Total cars: 3
  
  // Call the instance method using the objects
  car1.displayColor(); // Output: Car color: red
  car2.displayColor(); // Output: Car color: blue
  car3.displayColor(); // Output: Car color: green
  
// // STATIC KEYWORD IN CLASSES

// class Person{
//     // static
//      name = "Musahaf Ali";

// }
// const person2 = new Person();
// console.log(person2);
