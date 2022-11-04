class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

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

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    console.log(text);
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
    console.log(this.employees);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value');
    this.addReport(value);
  }
}

const accounting = new AccountingDepartment('d3', ['Luna']);
accounting.addReport('Tera');
accounting.addEmployee('good');
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Here is the last report';

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

class ManagementDepartment extends Department {
  private static instance: ManagementDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Management');
  }

  static getInstance() {
    if (ManagementDepartment.instance) {
      return this.instance;
    }
    this.instance = new ManagementDepartment('d4', []);

    console.log(1);
    return this.instance;
  }

  printReport() {
    console.log(this.reports);
  }
}

const management = ManagementDepartment.getInstance();
console.log(management);
