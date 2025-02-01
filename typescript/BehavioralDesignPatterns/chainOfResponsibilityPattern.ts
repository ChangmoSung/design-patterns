// Chain of Responsibility Pattern

// One of the most commonly used pattern

// Pass requests with a chain of handlers.
// Upon receiving a request, each handler decides either to process the request
// or to pass it to the next handler in the chain

// It gives more than one options to handle the request

// 1. When the exact handler isn't predetermined and is determined at runtime
// 2. Multiple Conditions - if statements etc..
// 3. Various Processing Logic
// 4. When requests need to be processed by multiple entities
// 5. Can be used to handle requests sequentially as well
// 6. Extensibility
// 7. Chain of handlers can be configured at runtime

// interface Handler {
//   setNext(handler: Handler): Handler;
//   handle(request: string): string | null;
// }

// abstract class AbstractHandler implements Handler {
//   private nextHandler: Handler | null = null;

//   public setNext(handler: Handler): Handler {
//     this.nextHandler = handler;
//     // Rerturing a handler for conveninent chaining
//     return handler;
//   }

//   public handle(request: string): string | null {
//     if (this.nextHandler) {
//       return this.nextHandler.handle(request);
//     }
//     return null;
//   }
// }

// class MonkeyHandler extends AbstractHandler {
//   public handle(request: string): string | null {
//     if (request === "Banana") {
//       return `Moneky: I'll eat the ${request}`;
//     }
//     return super.handle(request);
//   }
// }

// class SquirrelHandler extends AbstractHandler {
//   public handle(request: string): string | null {
//     if (request === "Nut") {
//       return `Squirrel: I'll eat the ${request}`;
//     }
//     return super.handle(request);
//   }
// }

// class DogHandler extends AbstractHandler {
//   public handle(request: string): string | null {
//     if (request === "MeatBall") {
//       return `Dog: I'll eat the ${request}`;
//     }
//     return super.handle(request);
//   }
// }

// // client code
// function clientCode(handler: Handler) {
//   const foods = ["Nut", "Banana", "Cup Of Coffee", "MeatBall"];

//   for (const food of foods) {
//     console.log(`Who wants to eat ${food}`);
//     const result = handler.handle(food);
//     if (result) {
//       console.log(result);
//     } else {
//       console.log(`${food} was left untouched `);
//     }
//   }
// }

// const monkey = new MonkeyHandler();
// const squirrel = new SquirrelHandler();
// const dog = new DogHandler();

// // Chaining handlers
// monkey.setNext(squirrel).setNext(dog);

// clientCode(monkey);

// ===

class Order {}

interface Handler {
  setNext(handler: Handler): Handler;
  handle(order: Order): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(order: Order): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(order);
    }
    return null;
  }
}

class ValidationHandler extends AbstractHandler {
  public isValid() {
    return true;
  }

  public handle(order: Order): string | null {
    if (this.isValid()) {
      return super.handle(order);
    }
    return "Validation Failed";
  }
}

class DiscountHandler extends AbstractHandler {
  public applyDiscount() {
    // discount
  }

  public handle(order: Order): string | null {
    this.applyDiscount();
    return super.handle(order);
  }
}

class PaymentHandler extends AbstractHandler {
  public processPayment() {
    return true;
  }

  public handle(order: Order): string | null {
    if (this.processPayment()) {
      return super.handle(order);
    }
    return "Payment Failed";
  }
}

class ShippingHandler extends AbstractHandler {
  public ship() {
    // shippingthe order
  }

  public handle(order: Order): string | null {
    this.ship();
    return "Order processed and shipped";
  }
}

// client code
const order = new Order();
const orderHandler = new ValidationHandler();
orderHandler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));
