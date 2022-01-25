class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// generic type explicitly annotated (preferred)
const stringsAnnotated = new ArrayOfAnything<string>(['a', 'b', 'c']);
// Typescript infers the type based upon the constructor arg value
const stringsInferred = new ArrayOfAnything(['a', 'b', 'c']);

// GENERICS WITH FUNCTIONS

function printStrings(arg: string[]): void {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

function printNumbers(arg: number[]): void {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

function printAnything<T>(arg: T[]): void {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

// generic type explicitly annotated (preferred)
printAnything<string>(['a', 'b', 'c']);
// inferred type for generic using function arg value
printAnything(['a', 'b', 'c']);

// GENERIC CONSTRAINTS

interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

function printHousesOrCars<T extends Printable>(arg: T[]): void {
  for (let i = 0; i < arg.length; i++) {
    arg[i].print();
  }
}

printHousesOrCars([1, 2, 3]);

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Printable>([new Car(), new House(), new House()]);
