class Vehicle {
  // modifier on constructor function parameter indicates the variable is a class variable
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }

  describe(): void {
    console.log(`I am a vehicle.\nMy color is ${this.color}.`);
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
vehicle.describe();

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  describe(): void {
    console.log(
      `I am a car.\nMy color is ${this.color}.\nI have ${this.wheels} wheels.`
    );
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('red', 4);
console.log(car.color);
car.startDrivingProcess();
car.describe();
