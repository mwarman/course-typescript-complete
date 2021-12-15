// Type annotated
// arguments/parameters must always be annotated
// return type may be annotated or inferred
// this return type is annotated
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inferred
// arguments/parameters must always be annotated
// return type is inferred
const subtract = (a: number, b: number) => {
  return a - b;
};

// Recommendation: Always use return type annotations so that Typescript can
// ensure your functions return the correct type of value.

// More examples of function annotations
function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};

// return type 'void' is used when the message has no return statement
// or returns only null or nothing at all
const logger = (message: string): void => {
  console.log(message);
};

// return type 'never' means that the function will NEVER reach the end
// extremely rare corner case
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// using ES2015 destructuring
const logWeatherES2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);
