// Factory Pattern - One of the most common patterns

// 1. Decoupling - Devs don't need to know anything about how each classes are initialized (behind-logic).
// They only need to call the factory's "create" method (factory is the only thing exposed to them).
// 2. Encapsulation - It encapsulates the details of object creation

// Caveat
// 1. Hidden Types - Actual object type can be obscured.

// Advantages of using abstract class
// 1. Only need to declare properties within constructor in the abstract class once
// 2. Can have default implementations that we wanna apply to all classes

abstract class Car {
  // Classes that extend an abstract class can have the properties from this constructor declared within themselves
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year ${this.productionYear}`
    );
  }
}

class CarFactory {
  public createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "camry", 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "RAV4", 2023);
suv.displayCarInfo();

const hatchback = carFactory.createCar("hatchback", "Corolla", 2023);
hatchback.displayCarInfo();

// ===

abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Paypal payment ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Stripe payment ${this.amount}`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing Bank Transfer payment ${this.amount}`);
  }
}

class PaymentProcessorFactory {
  public createProcessor(
    type: "paypal" | "stripe" | "bankTransfer",
    amount: number
  ) {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "bankTransfer":
        return new BankTransferProcessor(amount);
      default:
        throw new Error("Invalid processor type");
    }
  }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

const paypalProcessor = paymentProcessorFactory.createProcessor("paypal", 100);
paypalProcessor.processPayment();

const stripeProcessor = paymentProcessorFactory.createProcessor("stripe", 200);
stripeProcessor.processPayment();
