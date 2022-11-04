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

interface Named {
  readonly name?: string;
  outputName?: string;
  myMethod?(): void;
}

interface Greetable1 {
  greet(pharse: string): void;
}

class Niceman implements Greetable1, Named {
  name?: string;
  constructor(n?: string) {
    if (n) this.name = n;
  }
  greet(pharse: string) {
    console.log(`${pharse} from ${this.name}`);
  }
}

interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(1, 2));
