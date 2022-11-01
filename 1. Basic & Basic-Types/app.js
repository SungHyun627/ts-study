/* Type Useage */
function add(n1, n2) {
    return n1 + n2;
}
// const number1 = '5';
var number1 = 5;
var number2 = 2.8;
// Error 2345 : Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(number1, number2));
/* Type Infer */
var number3 = 5;
// Error 2322 : Type 'string' is not assignable to type 'number'.
// number3 = '3';
number3 = 3;
/* Object Types */
var person1 = {
    name: 'Max',
    age: 30
};
// Property 'surName' does not exist on type '{ name: string; age: number; }'.
// console.log(person1.surName);
var person2 = {
    name: 'Max',
    age: 30
};
var person3 = {
    name: 'Max',
    age: 30
};
console.log(person3);
var person4 = { name: 'Max', age: 30 };
console.log(person4);
