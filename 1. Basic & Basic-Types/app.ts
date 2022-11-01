function add(n1: number, n2: number) {
  return n1 + n2;
}

// const number1 = '5';
const number1 = 5;
const number2 = 2.8;

// Error 2345 : Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(number1, number2));

let number3 = 5;
// Error 2322 : Type 'string' is not assignable to type 'number'.
// number3 = '3';
number3 = 3;
