// 'drink' as an object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// 'drink' as a tuple
// w/o a tuple type annotation, Typescript infers this to be an array
const pepsi: [string, boolean, number] = ['brown', true, 40];

// tuples may also be annotated using a type alias
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];
const sweetTea: Drink = ['brown', false, 30];

// why/when might a tuple be used?
// perhaps when representing a file record, e.g. a CSV file record
// tuples not used often b/c they do not descriptively describe the data that they represent
