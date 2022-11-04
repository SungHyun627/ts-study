class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: this.name`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'accounting');
accounting.describe();
// const accountingCopy = { name: 'Whatever', describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// employees is private
// accounting.employees[2] = 'Anna';
accounting.printEmployeeInformation();
