// example of function defined inside an object
// Typescript will use type inference on the 'profile' object attributes
const profile = {
  name: 'joe',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// example of type annotations for destructuring the object
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
