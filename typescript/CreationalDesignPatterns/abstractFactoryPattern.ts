// Abstract Factory Pattern

// Provides an interface for creating families of related or dependent objects
// without specifying their concrete classes.
// It involves multiple factory methods, one for each type of object to be created

// 1. Consistency among products
// 2. Code reusability and swapping product families
// 3. Single Responsibility Principle
// 4. Open/Closed Principle

// Caveats
// 1. Increased complexity - Involves additional abstraction and more classes
// 2. Modifying product families - Changes to the factory interface affects all factory implementations
// 3. Code Maintenance - Maintenance can become hard as the number of products increases
// 4. Dependency - Client code becomes dependent on the factory interface
// 5. Difficulty of Unit Testing - Coupling of multiple products makes individual product testing hard

// Use Cases
// 1. BUI Libraries
// 2. Databases
// 3. Cross-Platform Development

// interface IProductA {
//   operationA(): string;
// }

// interface IProductB {
//   operationB(): string;
//   combinedOperation(collaborator: IProductA): string;
// }

// interface IFactory {
//   createProductA(): IProductA;
//   createProductB(): IProductB;
// }

// class ProductA implements IProductA {
//   public operationA(): string {
//     return "This is the result of Operation A";
//   }
// }

// class ProductB implements IProductB {
//   public operationB(): string {
//     return "This is the result of Operation B";
//   }

//   public combinedOperation(collaborator: IProductA): string {
//     const result = collaborator.operationA();
//     return `The result of Product B collaborating with ${result}`;
//   }
// }

// class Factory implements IFactory {
//   public createProductA(): IProductA {
//     return new ProductA();
//   }

//   public createProductB(): IProductB {
//     return new ProductB();
//   }
// }

// // How developers use it in client
// const factory = new Factory();

// const productA = factory.createProductA();
// console.log("productA.operationA()", productA.operationA());

// const productB = factory.createProductB();
// console.log(
//   "productB.combinedOperation(productA)",
//   productB.combinedOperation(productA)
// );
// console.log("productB.operationB()", productB.operationB());

// ===

interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  public render(): void {
    console.log("Render a button in Windows");
  }

  public onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in Windows");
  }

  public toggle(): void {
    this.button.onClick(() => {
      console.log("Windows checkbox toggled");
    });
  }
}

class MacOSButton implements Button {
  public render(): void {
    console.log("Render a button in MacOS");
  }

  public onClick(f: Function): void {
    console.log("MacOS button was clicked");
    f();
  }
}

class MacOSCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in MacOS");
  }

  public toggle(): void {
    this.button.onClick(() => {
      console.log("MacOS checkbox toggled");
    });
  }
}

class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacOSFactory implements GUIFactory {
  public createButton(): Button {
    return new MacOSButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

// How developers use it in client
function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => {
    console.log("Button Clicked");
  });
  checkbox.toggle();
}

renderUI(new WindowsFactory());
renderUI(new MacOSFactory());
