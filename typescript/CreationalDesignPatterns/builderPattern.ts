// Builder Pattern
// Construct complex objects step by step
// Building objects in parts
// To separate the constructin of a complex object from its representation

// 1. Code Readability
// 2. Separation of Logic - Construction logic separate from business logic
// 3. Immutability - gives an object that is not a reference to another object
// 4. Reduced Parameter Complexity
// 5. Easier to Extend

// When to use
// 1. When I need to create complex objects
// 2. When I have to create an object step by step in a specific order
// 3. When I handle an object that can be configured in many different ways
// 4. When I need to construct a composite structure (like a tree)
// 5. When I need to construct an immutable object with many attributes
// 6. When I have a constructor with many parameters and it's not clear what they are

// Caveats
// 1. Increased Complexity - Involves additional abstraction layer and more classes
// 2. Additional Code - Can result in significant code addition
// 3. Runtime Errors - Lack of built-in compile-time checks
// 4. Performance - More computational resources

// interface Builder {
//   setPartA(): void;
//   setPartB(): void;
//   setPartC(): void;
// }

// class Product {
//   private parts: string[] = [];

//   public add(part: string): void {
//     this.parts.push(part);
//   }

//   public listParts(): void {
//     console.log(`Product Parts: ${this.parts.join(", ")}`);
//   }
// }

// class ConcreteBuilder implements Builder {
//   private product!: Product;

//   // Make product empty
//   constructor() {
//     this.reset();
//   }

//   public reset(): void {
//     this.product = new Product();
//   }

//   public setPartA(): void {
//     this.product.add("PartA");
//   }

//   public setPartB(): void {
//     this.product.add("PartB");
//   }

//   public setPartC(): void {
//     this.product.add("PartC");
//   }

//   public getProduct(): Product {
//     const result = this.product;
//     this.reset();

//     return result;
//   }
// }

// class Director {
//   private builder!: Builder;

//   public setBuilder(builder: Builder): void {
//     this.builder = builder;
//   }

//   public buildMinimumProduct(): void {
//     this.builder.setPartA();
//   }

//   public buildFullProduct(): void {
//     this.builder.setPartA();
//     this.builder.setPartB();
//     this.builder.setPartC();
//   }
// }

// const builder = new ConcreteBuilder();
// const director = new Director();

// director.setBuilder(builder);

// director.buildMinimumProduct();
// const minimumProduct = builder.getProduct();
// console.log("minimumProduct", minimumProduct);

// director.buildFullProduct();
// const fullProduct = builder.getProduct();
// console.log("fullProduct", fullProduct);

// ===

// Customer -> Builder -> Director
// Director takes the builder and controls it to create customer within the builder
// Customer is about the properties it should have
// Builder is about the methods that are needed to build a customer
// Director controls what needs to be built in the builder

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  public setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  public setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public build(): ICustomer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    );
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  public buildMinimalCustomer(
    firstName: string,
    lastName: string,
    email: string
  ) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const builder: ICustomerBuilder = new CustomerBuilder();
const director: CustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = director.buildMinimalCustomer(
  "Changmo",
  "Sung",
  "email@example.com"
);

console.log("customer", customer);
