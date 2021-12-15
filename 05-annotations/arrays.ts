// Type inference
const carMakers = ['ford', 'toyota', 'chevy'];

// Type annotation
const carManufacturers: string[] = ['ford', 'toyota', 'chevy'];

// when to use Type annotation? when initializing an empty array
const carMakes: string[] = [];

// arrays may contain complex objects...
const dates = [new Date(), new Date()];

// two-dimensional arrays
// only need to annotate with type when not initialized
const carsByMake: string[][] = [['f150', 'focus'], ['corolla'], ['camaro']];

// Why use typed arrays?
// - when extracting a value from the array, Typescript knows what type the variable is
const car = carMakers[0];
const myCar = carMakers.pop();

// - helps prevent adding incompatible values to an array
carMakers.push(1000);

// - provides help with array functions like 'map', 'find', etc.
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// - flexible array types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-01-01');
importantDates.push(new Date());
importantDates.push(1000);
