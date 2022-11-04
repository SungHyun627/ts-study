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
class Korean {
    constructor(n) {
        this.name = n;
    }
    greet(pharse) {
        console.log(`${pharse} from ${this.name}`);
    }
}
let Sunghyun;
const Kim = new Korean('Hi');
console.log(Kim);
//# sourceMappingURL=interface.js.map