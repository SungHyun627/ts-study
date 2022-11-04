class Department {
  constructor(n: string) {
    this.name = n;
  }
  name: string;
}

const accounting = new Department('accounting');
console.log(accounting);
