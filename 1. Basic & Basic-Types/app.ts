/* Type Useage */
function add(n1: number, n2: number) {
  return n1 + n2;
}

// const number1 = '5';
const number1 = 5;
const number2 = 2.8;

// Error 2345 : Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(number1, number2));

/* Type Infer */

let number3 = 5;
// Error 2322 : Type 'string' is not assignable to type 'number'.
// number3 = '3';
number3 = 3;

/* Object Types */
const person1 = {
  name: 'Max',
  age: 30,
};

// Property 'surName' does not exist on type '{ name: string; age: number; }'.
// console.log(person1.surName);

const person2: object = {
  name: 'Max',
  age: 30,
};

const person3: {} = {
  name: 'Max',
  age: 30,
};

console.log(person3);

const person4: {
  name: string;
  age: number;
} = { name: 'Max', age: 30 };

console.log(person4);

/* Array Types */
let favoriteActivities: string[];
let favoriteNumbers: Array<number>;
favoriteActivities = ['Sports'];
favoriteNumbers = [1, 2, 3];
console.log(favoriteActivities, favoriteNumbers);
