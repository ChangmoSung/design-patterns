// Decorator pattern
// This is a widely used pattern

// Dynamically add or override behaviour in an existing object
// without changing its implementation

// 1. When wanting to modify the behaviour of an object
// without affecting other objects of the same class
// 2. Updates are done at runtime
// 3. Code Reusability and Reduced Redundancy
// 4. Simple and Clean code
// 5. Single Responsibility Principle

// Caveats
// Can result in too many small objects
// Requires interface compatibility
// Not suitable for adding new methods
// Ordering of decorators is important

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  public cost(): number {
    console.log(this.coffee.description());
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()} with milk`;
  }
}

// Client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);

// ===

interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  public handle(request: any): void {
    console.log("Handling Request: ", request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    console.log("Logging Request: ", request);
    this.serverRequest.handle(request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("unAuthorised Access");
    }
  }
}

// Client Code

const request = {
  isAuthenticated: true,
  body: "hello world",
};

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
