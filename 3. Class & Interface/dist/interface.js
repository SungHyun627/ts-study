"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet(pharse) {
        console.log(`${pharse} from ${this.name}`);
    },
};
console.log(user1);
user1.greet('Hi there -');
//# sourceMappingURL=interface.js.map