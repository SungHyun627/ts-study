"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
const marketing = new Department('d1', 'marketing');
marketing.describe();
marketing.addEmployee('Max');
marketing.addEmployee('Manu');
marketing.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const it = new ITDepartment('d2', ['Max']);
it.addEmployee('Harry');
it.describe();
it.printEmployeeInformation();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        console.log(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
        console.log(this.employees);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value');
        this.addReport(value);
    }
}
const accounting = new AccountingDepartment('d3', ['Luna']);
accounting.addReport('Tera');
accounting.addEmployee('good');
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Here is the last report';
//# sourceMappingURL=class.js.map