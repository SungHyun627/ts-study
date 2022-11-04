interface Person {
  name: string;
  age: number;
  greet(pharse: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(pharse: string) {
    console.log(`${pharse} from ${this.name}`);
  },
};

console.log(user1);
user1.greet('Hi there -');

interface Greetable {
  readonly name: string;
  greet(pharse: string): void;
}

class Korean implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  greet(pharse: string) {
    console.log(`${pharse} from ${this.name}`);
  }
}

let Sunghyun: Greetable;
const Kim = new Korean('Hi');
console.log(Kim);
