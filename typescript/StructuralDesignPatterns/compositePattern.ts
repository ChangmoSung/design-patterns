// Composite Pattern

// For tree-like structure
// e,g,. Hierarchy of objects

// 1. Simplified client code
// 2. Easy to add new types of components
// 3. Easy to represent hierarchies

// Caveats
// Violates single responsibility principle
// Difficult to restrict components
// Indirect Coupling
// Difficult to check types

interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Developer";
  }
}

class Designer implements Employee {
  constructor(private name: string, private salary: number) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Designer";
  }
}

interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Manager";
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);

    if (index) {
      this.employees.splice(index, 1);
    }
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }
}

// Client code
const dev1 = new Developer("Changmo1", 1000000);
const dev2 = new Developer("Changmo2", 2000000);
const designer = new Designer("Des", 100000);

const manager = new Manager("Man", 50000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer);

console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());

// ===

interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

class FileComponent implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0
    );
  }

  public addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  public getComponents(): FileSystemComponent[] {
    return this.components;
  }
}

// Client Code
const file1 = new FileComponent("file1.txt", 500);
const file2 = new FileComponent("file2.txt", 800);
const file3 = new FileComponent("file3.txt", 1200);

const folder = new Folder("My Folder");
folder.addComponent(file1);
folder.addComponent(file2);
folder.addComponent(file3);

console.log(`Folder ${folder.getName()}  Contains:`);
folder
  .getComponents()
  .map((component) =>
    console.log(
      `- ${component.getName()} with the size of ${component.getSize()} bytes`
    )
  );

console.log(`Total Size ${folder.getSize()}`);
