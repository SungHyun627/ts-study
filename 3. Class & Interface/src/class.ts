class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

const marketing = new Department('d1', 'marketing');
marketing.describe();
// const marketingCopy = { name: 'Whatever', describe: marketing.describe };
// marketingCopy.describe();

marketing.addEmployee('Max');
marketing.addEmployee('Manu');
// employees is private
// marketing.employees[2] = 'Anna';
marketing.printEmployeeInformation();

// Inheritance
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}

const it = new ITDepartment('d2', ['Max']);
it.addEmployee('Harry');
it.describe();
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d3', ['Luna']);
accounting.addReport('Tera');
accounting.printReports();
