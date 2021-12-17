import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

console.log('SORT NUMBERS');
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(`initial data: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`sorted data:  ${numbersCollection.data}`);

console.log('SORT CHARACTERS');
const charactersCollection = new CharactersCollection('HelLo woRlD');
console.log(`initial data: ${charactersCollection.data}`);
charactersCollection.sort();
console.log(`sorted data:  ${charactersCollection.data}`);

console.log('SORT LINKED LIST');
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-5);
linkedList.add(1);
linkedList.add(0);
linkedList.add(-10);
console.log('initial data:');
linkedList.print();
linkedList.sort();
console.log('sorted data:');
linkedList.print();
