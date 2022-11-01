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
/* Array Types */
var favoriteActivities;
var favoriteNumbers;
favoriteActivities = ['Sports'];
favoriteNumbers = [1, 2, 3];
console.log(favoriteActivities, favoriteNumbers);
/* Tuple Type */
var person;
person = [1, 'good'];
/* Enum */
var Role1;
(function (Role1) {
    Role1[Role1["ADMIN"] = 0] = "ADMIN";
    Role1[Role1["READ_ONLY"] = 1] = "READ_ONLY";
    Role1[Role1["AUTHOR"] = 2] = "AUTHOR";
})(Role1 || (Role1 = {}));
var employee = {
    name: 'Max',
    role: Role1.ADMIN
};
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 6] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 7] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 8] = "AUTHOR";
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 10] = "ADMIN";
    Role3[Role3["READ_ONLY"] = 100] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 1000] = "AUTHOR";
})(Role3 || (Role3 = {}));
var Role4;
(function (Role4) {
    Role4["ADMIN"] = "ADMIN";
    Role4[Role4["READ_ONLY"] = 100] = "READ_ONLY";
    Role4[Role4["AUTHOR"] = 3] = "AUTHOR";
})(Role4 || (Role4 = {}));
