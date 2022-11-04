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
